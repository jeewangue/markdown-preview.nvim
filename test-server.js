// Simple standalone test server to validate markdown rendering without Neovim
const http = require('http')
const fs = require('fs')
const path = require('path')
const socketIo = require('socket.io')

const PORT = 8888
const APP_DIR = path.join(__dirname, 'app')

// Read test markdown file
const testMarkdown = fs.readFileSync(path.join(__dirname, 'test/test.md'), 'utf-8')

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
}

// HTTP server
const server = http.createServer((req, res) => {
  let filePath = req.url.replace(/\?.*$/, '')

  // Route /page/1 or /1 to index.html
  if (filePath.startsWith('/page/') || filePath === '/' || /^\/\d+$/.test(filePath)) {
    filePath = '/index.html'
  }

  // Static files from /_static/ -> app/_static/
  if (filePath.startsWith('/_static/')) {
    const staticFile = filePath.slice(9) // remove '/_static/'
    const staticPath = path.join(APP_DIR, '_static', staticFile)
    if (fs.existsSync(staticPath) && fs.statSync(staticPath).isFile()) {
      const ext = path.extname(staticPath)
      const contentType = mimeTypes[ext] || 'application/octet-stream'
      res.writeHead(200, { 'Content-Type': contentType })
      fs.createReadStream(staticPath).pipe(res)
      return
    }
  }

  // Map to app/out directory (Next.js export)
  const fullPath = path.join(APP_DIR, 'out', filePath)

  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
    const ext = path.extname(fullPath)
    const contentType = mimeTypes[ext] || 'application/octet-stream'
    res.writeHead(200, { 'Content-Type': contentType })
    fs.createReadStream(fullPath).pipe(res)
    return
  }

  console.log('404:', req.url)
  res.writeHead(404)
  res.end('Not Found')
})

// WebSocket server
const io = socketIo(server)

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id)

  // Send test content immediately
  socket.emit('refresh_content', {
    options: {
      mkit: {},
      katex: {},
      uml: {},
      disable_sync_scroll: true,
      disable_filename: 0
    },
    isActive: true,
    winline: 1,
    winheight: 50,
    cursor: [0, 1, 1, 0],
    pageTitle: 'Test Preview - ${name}',
    theme: 'light',
    name: 'test.md',
    content: testMarkdown.split('\n')
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id)
  })
})

server.listen(PORT, () => {
  console.log(`\n✅ Test server running at http://localhost:${PORT}/page/1\n`)
  console.log('This will render test/test.md with all markdown features:')
  console.log('  - KaTeX math equations')
  console.log('  - Mermaid diagrams')
  console.log('  - PlantUML')
  console.log('  - Flowcharts')
  console.log('  - Code highlighting')
  console.log('  - Task lists')
  console.log('\nPress Ctrl+C to stop.\n')
})
