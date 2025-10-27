# Backend: running and migrations (Docker)

This file explains how to run the backend and apply Alembic migrations using Docker.

Recommended development flow (one-off migrations):

1. Start the database:

```bash
cd "$(pwd)/backend"
docker-compose up -d db
```

2. Run migrations (one-off):

```bash
docker-compose run --rm migrate
```

3. Start the web app (will not attempt to migrate):

```bash
docker-compose up -d web
```

Automatic migrations on web startup (dev convenience)

The `web` service is configured to run `scripts/wait_and_migrate.sh` which:
- waits for the Postgres service to be reachable
- runs `alembic upgrade head`
- starts the application (uvicorn)

This is convenient in development, but in production we recommend applying migrations from CI or via an orchestration job before deploying app containers.

Notes
- `DATABASE_URL` env is read by Alembic and by the app; in compose it is set to point to the `db` service by default.
- If you prefer not to have the web container run migrations, remove the `command` override in `docker-compose.yml` and use the `migrate` service manually.
