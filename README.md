# SyncAI landing page

A responsive React + TypeScript landing page with Tailwind CSS, plus a FastAPI backend starter.

## Requirements

- Node.js 20.19+ and npm
- Python 3.8+

## Run the frontend

```bash
npm install
npm run dev
```

## Run the backend

```bash
python -m venv .venv
```

Activate the virtual environment, then install and run the API:

```bash
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload --app-dir backend
```

The API health check is available at `http://127.0.0.1:8000/api/health`, with interactive documentation at `http://127.0.0.1:8000/docs`. The Vite development server proxies `/api` requests to the backend.

## Project layout

```text
backend/
  app/
    main.py          FastAPI application
src/
  App.tsx            Landing page
  index.css          Tailwind import and global styles
  main.tsx           React entry point
vite.config.ts       Vite and Tailwind configuration
requirements.txt     Python dependencies
```
