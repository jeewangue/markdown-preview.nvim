# markdown-preview.nvim

![image](https://user-images.githubusercontent.com/5492542/47603494-28e90000-da1f-11e8-9079-30646e551e7a.gif =400x200)

## Features Checklist

- [x] markdown render: markdown-it
- [x] markdown highlight
- [x] markdown css
- [x] math katex
- [x] plantuml
- [x] markdown-it option
- [x] katex option
- [x] plantuml option
- [x] markdown style option
- [x] highlight style option
- [x] sync scroll
- [x] preview page title
- [x] task list
- [x] emoji support
- [ ] cross platform test (mac/linux/windows)

---

# PlantUML

@startuml
Bob -> Alice : hello
Alice -> Bob : hi there
@enduml

---

# Flowchart.js

```flowchart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```

---

# Code Highlighting

```javascript
// Modern JavaScript example
const greet = (name) => `Hello, ${name}!`;

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

console.log(greet('World'));
```

```python
# Python example
def fibonacci(n: int) -> list[int]:
    """Generate Fibonacci sequence."""
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib[:n]

print(fibonacci(10))
```

```bash
#!/bin/bash
# Shell script example
for file in *.md; do
    echo "Processing: $file"
done
```

---

# KaTeX Math

## Inline Math

The quadratic formula is $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$.

Einstein's famous equation: $E = mc^2$

## Block Math

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

## Maxwell's Equations

| Equation | Description |
|----------|-------------|
| $\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0}$ | Gauss's law |
| $\nabla \cdot \vec{B} = 0$ | No magnetic monopoles |
| $\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}$ | Faraday's law |
| $\nabla \times \vec{B} = \mu_0\vec{J} + \mu_0\varepsilon_0\frac{\partial \vec{E}}{\partial t}$ | Ampère's law |

## Matrix

$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix}
=
\begin{pmatrix}
ax + by \\
cx + dy
\end{pmatrix}
$$

---

# Chart.js

```chart
{
  "type": "pie",
  "data": {
    "labels": ["Red", "Blue", "Yellow"],
    "datasets": [{
      "data": [300, 50, 100],
      "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"]
    }]
  }
}
```

---

# Mermaid Diagrams (v11)

## Flowchart

```mermaid
flowchart TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
    C --> E[End]
```

## Flowchart LR

```mermaid
flowchart LR
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
```

## Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    participant A as Alice
    participant B as Bob
    participant C as Charlie

    A->>B: Hello Bob!
    activate B
    B->>C: Hello Charlie!
    activate C
    C-->>B: Hi Bob!
    deactivate C
    B-->>A: Hi Alice!
    deactivate B

    loop Every minute
        A->>B: Are you there?
        B-->>A: Yes!
    end
```

## Class Diagram

```mermaid
classDiagram
    class Animal {
        +String name
        +int age
        +makeSound() void
    }
    class Dog {
        +String breed
        +bark() void
    }
    class Cat {
        +String color
        +meow() void
    }
    Animal <|-- Dog
    Animal <|-- Cat
```

## State Diagram

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing : Start
    Processing --> Success : Complete
    Processing --> Error : Fail
    Success --> [*]
    Error --> Idle : Retry
    Error --> [*] : Abort
```

## Entity Relationship Diagram

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string email
        int id PK
    }
    ORDER ||--|{ LINE_ITEM : contains
    ORDER {
        int id PK
        date created
        string status
    }
    PRODUCT ||--o{ LINE_ITEM : "ordered in"
    PRODUCT {
        int id PK
        string name
        float price
    }
```

## Gantt Chart

```mermaid
gantt
    title Project Timeline
    dateFormat YYYY-MM-DD
    section Planning
        Requirements    :a1, 2024-01-01, 7d
        Design          :a2, after a1, 5d
    section Development
        Frontend        :b1, after a2, 14d
        Backend         :b2, after a2, 14d
    section Testing
        QA Testing      :c1, after b1, 7d
```

## Pie Chart

```mermaid
pie showData
    title Browser Market Share
    "Chrome" : 65
    "Safari" : 19
    "Firefox" : 10
    "Edge" : 6
```

## Mindmap

```mermaid
mindmap
    root((Project))
        Frontend
            React
            TypeScript
            CSS
        Backend
            Node.js
            Database
            API
        DevOps
            CI/CD
            Docker
            Kubernetes
```

## Timeline

```mermaid
timeline
    title History of Web Development
    1991 : HTML invented
    1995 : JavaScript created
    1996 : CSS introduced
    2004 : Web 2.0 begins
    2010 : HTML5 released
    2015 : ES6 JavaScript
    2020 : Modern frameworks
```

## Quadrant Chart

```mermaid
quadrantChart
    title Tech Skills Assessment
    x-axis Low Demand --> High Demand
    y-axis Low Expertise --> High Expertise
    quadrant-1 Invest
    quadrant-2 Maintain
    quadrant-3 Avoid
    quadrant-4 Learn
    JavaScript: [0.8, 0.7]
    Python: [0.9, 0.6]
    Rust: [0.5, 0.3]
    Go: [0.6, 0.4]
```

## Git Graph

```mermaid
gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    branch feature
    checkout feature
    commit
    checkout main
    merge feature
```

---

# Emoji Support

:smile: :heart: :thumbsup: :rocket: :fire: :star:

---

# Definition List

Term 1
:   Definition 1a
:   Definition 1b

Term 2
:   Definition 2

---

# Footnotes

Here is a footnote reference[^1], and another[^longnote].

[^1]: Here is the footnote content.

[^longnote]: Here's a longer footnote with multiple paragraphs.

    Subsequent paragraphs are indented.
