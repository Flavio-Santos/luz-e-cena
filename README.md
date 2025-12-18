# Luz e Cena

Luz e Cena is a study project developed with React and TypeScript as part of an Alura
course. The main goal was to create a simple cinema visualization app that fetches a list
of movies from a mock server (`json-server`) and displays them on the frontend.

## 📚 Project Overview

- **Purpose:** Practice building reusable React components with TypeScript and CSS
  Modules.
- **Backend:** Uses `json-server` to simulate a REST API for movie data.
- **Frontend:** Fetches movies from the server, displays them in a list, and allows
  searching by movie name.

## ✨ Main Features

- Fetches and displays a list of movies from a mock API.
- Search functionality to filter movies by name.
- Reusable components built with React, TypeScript, and CSS Modules.
- Clean and modular code structure.

## 📚 React Features

- How to create and structure React components using TypeScript and JSX.
- Using **CSS Modules** for encapsulated component styling.
- Structuring forms with semantic tags (e.g., `<form>`, `<fieldset>`, `<input>`) inside
  React components.
- Passing specific **props** to configure form elements and other components.
- Importing and integrating components to promote **reusability **and** modularity**.
- Using VS Code shortcuts like `rafce` to quickly scaffold functional components.
- Implementing **composition techniques** by importing and reusing smaller components
  within larger ones.
- Correctly referencing and applying images in React from the `public` folder.

## 🛠️ Technologies Used

| Technology  | Description                 |
| ----------- | --------------------------- |
| React       | UI library                  |
| TypeScript  | Static typing               |
| Vite        | Fast development/build tool |
| json-server | Mock REST API               |
| axios       | HTTP client                 |
| classnames  | Conditional CSS classes     |
| react-icons | Icon library                |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/luz-e-cena.git
   cd luz-e-cena
   ```
2. **Install dependencies:**
   ```
   npm install
   or
   yarn install
   ```
3. **Start the mock API server:**
   ```
   npm run server
   # or
   yarn server
   ```
   The server will run at http://localhost:4000.

## 🖥️ Usage

- The homepage displays a list of movies currently "showing".
- Use the search bar to filter movies by their title.

## 📸 Screenshots

<!-- Add screenshots or GIFs of your app here -->

- ![
Logo do Projeto
](./public/doc_md/home_top.png)

- ![
Logo do Projeto
](./public/doc_md/home_middle.png)

- ![
Logo do Projeto
](./public/doc_md/home_footer.png)

## 📜 Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the Vite development server |
| `npm run build`   | Build the app for production      |
| `npm run lint`    | Run ESLint                        |
| `npm run preview` | Preview the production build      |
| `npm run server`  | Start json-server on port 4000    |

## 📝 License

This project has educational and portfolio purposes.

---
