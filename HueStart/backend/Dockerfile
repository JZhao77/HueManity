FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY alembic.ini alembic.ini
COPY alembic alembic
COPY app app
COPY scripts scripts
RUN chmod +x scripts/wait_and_migrate.sh

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
