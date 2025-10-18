# Authentication boilerplate using Next JS and FastAPI

This repository is a minimal, production-oriented authentication boilerplate combining:
- Next.js — frontend with server-side rendering, API routes and client auth helpers.
- FastAPI — backend REST API serving authentication, user management and token handling.

The goal is to provide a clear starting point for apps that need secure user authentication with JWTs, refresh tokens, and role-aware endpoints.

## Features

- Email/password authentication
- Access / refresh JWT tokens
- Protected API endpoints (role- or permission-based)
- Google Authentication
- Example auth pages (signup, signin, profile)

## Repository layout

- / — Next.js app (pages, components, auth client)
- backend/ — FastAPI app (routes, models, auth, DB migrations)
- docker-compose.yml — local development stack (Postgres + apps)

## Quickstart (local)

Prerequisites: Node >= 22, Python 3.10+, Docker (optional)

1. Install dependencies
```bash
# frontend
pnpm install  # or npm install / yarn

# backend
cd ../backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

2. Configure environment variables (see next section)

3. Run apps (development)
```bash
# backend
cd backend
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# frontend
cd ../frontend
pnpm dev
```

Or use Docker Compose:
```bash
docker compose up --build
```

## Environment variables (examples)

Create .env files in frontend/ and backend/ with the following (example keys):

Keep secrets out of version control. Use a secrets manager for production.

## Contributing

- Open issues for bugs or feature requests
- Keep PRs small and focused
- Include tests for any new functionality

## License

Provided as a permissive starting point. Add a LICENSE file to specify terms.
