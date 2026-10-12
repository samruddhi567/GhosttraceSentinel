# GhostTrace Sentinel - DevOps Security & Compliance Dashboard

**GhostTrace Sentinel** is an advanced pre-commit security governance and architectural compliance platform designed for modern engineering teams and software developers. The system operates as an automated guardrail within the developer workspace directly at the local git pre-commit stage to prevent non-compliant code from reaching shared repositories.

---

## ⚡ Overview

Built using a high-performance **FastAPI** backend paired with a modern **Next.js** frontend, GhostTrace integrates static code analysis, Abstract Syntax Tree (AST) parsing, and LLM-driven intelligence into a unified, real-time workflow. It bridges the critical gap between high-level business governance rules, technical architecture specifications, and raw source code execution.

### Key Capabilities

- **Three-Way Alignment Engine**: Rigorously evaluates pending staged code commits against Business Requirements Documents (BRD) and Technical Architecture Blueprints.
- **Pre-Commit Gate Verdicts**: Delivers deterministic verdicts (`COMMIT ALLOWED` or `COMMIT BLOCKED`) with instant violation scores before code leaves the developer's machine.
- **Pinpointed Violations**: Flags discrepancies with clear descriptions, file references, and security recommendations (e.g., hardcoded credentials, unparameterized SQL queries, missing rate limiting).
- **Auto-Remediation & Suggestions**: Formulates actionable required fixes to restore compliance without compromising developer velocity.
- **Modern High-Density UI**: Sleek dark-mode interface built with Next.js, React 19, and Tailwind CSS.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19, TypeScript)
- **Styling & UI**: Tailwind CSS, Lucide React icons
- **Backend**: FastAPI (Python) serving verification endpoints on `http://localhost:8000/api/verify-commit`
- **Model Engine**: Llama 3.2 / Ollama integration for architectural compliance verification

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ or v20+ recommended)
- [Python](https://www.python.org/) 3.10+ (for running the FastAPI backend)

### 1. Run the Next.js Frontend

Install dependencies (if not already installed):
```bash
npm install
```

Start the local development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Run the FastAPI Backend (Required for live audits)

Ensure your backend is running on port 8000:
```bash
# Example FastAPI run command
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

---

## 📁 Project Structure

```
ghosttrace-dashboard/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx           # Main GhostTrace Sentinel Auditor Interface
├── public/                # Static public assets
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 📜 License

MIT License. Designed & Developed for robust DevOps security governance.
