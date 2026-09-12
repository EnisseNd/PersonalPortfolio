# Enisse Ndikumana | Personal Portfolio

A personal portfolio website highlighting my interests in software engineering, product management, and AI/ML, and links to selected projects and professional profiles.

## Features

- Sticky navigation for About, Stats, Projects, and Contact sections
- Personal background and academic information
- Selected project descriptions with links to their GitHub repositories
- Direct email and LinkedIn contact links
- Responsive layout for desktop and mobile screens

## Featured Projects

- [Sponsorship Optimizer](https://github.com/EnisseNd/SponsorshipOptimizer): An AI-powered sponsorship outreach API built with Python, FastAPI, PostgreSQL, and Groq/LLaMA 3.3.
- [Currency Converter](https://github.com/EnisseNd/CurrencyConverter): A currency conversion app that uses real-time exchange rates from an external API.
- [Language Translator](https://github.com/EnisseNd/LangTranslator): A text translation app powered by an external translation API.
- [Chatbot](https://github.com/EnisseNd/C2C-Chatbot): An early chatbot project that responds to standard user queries.

## Tech Stack

- React 19
- Vite
- JavaScript (ES modules)
- CSS
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

From the repository root, enter the application directory and install dependencies:

```bash
cd personal-portfolio
npm install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This portfolio is deployed on [Vercel](https://vercel.com/). To deploy the project manually:

1. Import the repository into Vercel.
2. Set the project root directory to `personal-portfolio`.
3. Select Vite as the framework preset.
4. Use `npm run build` as the build command.
5. Use `dist` as the output directory.

Vercel can also be connected to the Git repository to automatically create preview deployments for branches and deploy production changes from the configured production branch.

Run the linter with:

```bash
npm run lint
```

## Project Structure

```text
.
├── personal-portfolio/
│   ├── public/                 # Static public assets
│   ├── src/
│   │   ├── assets/             # Application assets
│   │   ├── App.css             # Portfolio layout and component styles
│   │   ├── App.jsx             # Portfolio content and page structure
│   │   ├── index.css           # Global styles and design tokens
│   │   └── main.jsx            # React application entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Contact

- Email: [enisse.ndikumana@yale.edu](mailto:enisse.ndikumana@yale.edu)
- [LinkedIn](https://linkedin.com/in/enisse-ndikumana/)
- [GitHub](https://github.com/EnisseNd)
