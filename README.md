# Context API Todo App

## Description

A clean, responsive Todo application that demonstrates managing global state with multiple React Contexts. The app includes core todo management, visibility filters, and a theme system, with persistence to localStorage. Built with vanilla React (no third-party state libraries), Vite, and CSS.

## Table of Contents

- [Technologies Used](#technologiesused)
- [Features](#features)
- [Future Features](#nextsteps)
- [Deployed App](#deployment)
- [About the Authors](#author)

## <a name="technologiesused"></a>Technologies Used

- **JavaScript (React)** – Components and Context API for global state
- **HTML5** – Semantic structure
- **CSS3** – Custom styling, premium spacing, and black/white/grey palette
- **Vite** – Fast dev server and build tooling
- **LocalStorage** – Persistence for todos and theme

## <a name="features"></a> Features

**Core Todo Management** – Add, edit, toggle complete, delete, and clear completed  
**Visibility Filters** – View All, Active, or Completed todos  
**Theme System** – Light/Dark handling via ThemeContext with persistence  
**Local Persistence** – Todos and theme saved to localStorage  
**Context Architecture** – `TodoContext`, `FilterContext`, `ThemeContext`, and `AppProviders`  
**Premium Styling** – Responsive layout, centered controls, and accessible cursor behavior

**In Progress:**

- [ ] Additional theme variants (Retro, High-Contrast)
- [ ] Keyboard shortcuts for quick actions

## <a name="nextsteps"></a>Future Features

- **Bulk Actions** – Select multiple todos for batch operations
- **Search** – Filter todos by text content
- **Animations** – Smooth transitions for adding/removing items
- **Collaborative Mode** – Share list via simple backend/API
- **Offline-First** – Service worker for offline usage

## <a name="deployment"></a>Deployed Link

**Live Application:**  
TBD (local development with Vite)

**Repository:**  
This repo (Context API Todo App)

## <a name="author"></a>About The Authors

**THEE TEAM**

- **[Anwar Zeb](https://github.com/a-zeb)** – State architecture and APIs  
- **[Clarence Franklin](https://github.com/cfra8189)** – UI/UX design & styling  
- **[Kayla Knight](https://github.com/kaylaknight385)** – Project lead & frontend development

## Development Process

This project was built collaboratively using:

- Git branching workflow for version control
- Feature-based development with frequent small commits
- Code reviews and pair programming

## Installation & Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
```

2. Navigate to project directory:

```bash
cd context-api
```

3. Install dependencies and start dev server:

```bash
npm install
npm run dev
```

4. Open the app:

- Vite will display the local URL in the terminal (e.g., http://localhost:5173)

## Works Cited:

- [React Docs – Context](https://react.dev/reference/react/Context)  
- [Vite Documentation](https://vite.dev/)  
- [MDN Web Docs – JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
- [CSS-Tricks – Grid & Flexbox](https://css-tricks.com/)
