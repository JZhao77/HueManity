#!/usr/bin/env bash
set -euo pipefail

# Wait for the database to become available, run alembic migrations, then
# exec the provided command. This uses Python + SQLAlchemy (psycopg2-binary)
# which are installed in the image so no OS-level pg tools are required.

export DATABASE_URL="${DATABASE_URL:-postgresql://postgres:postgres@db:5432/mydb}"

echo "Waiting for database at $DATABASE_URL"

python - <<'PY'
import os, time
from sqlalchemy import create_engine, text

url = os.environ.get('DATABASE_URL')
engine = create_engine(url)

for i in range(60):
    try:
        with engine.connect() as conn:
            # SQLAlchemy 1.x allowed raw SQL strings, SQLAlchemy 2.x requires text()
            conn.execute(text("SELECT 1"))
        print('database available')
        raise SystemExit(0)
    except Exception as exc:
        print(f'db not ready ({i+1}/60): {exc}')
        time.sleep(1)
raise SystemExit(1)
PY

echo "Database ready — running migrations"
alembic upgrade head
echo "Migrations complete"

# Exec remaining args (start the app)
exec "$@"
