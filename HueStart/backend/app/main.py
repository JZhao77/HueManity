from fastapi import FastAPI
from app.api.v1.routes import health, users

app = FastAPI(title="HueStart API", version="1.0.0")

app.include_router(health.router, prefix="/api/v1")
app.include_router(users.router, prefix="/api/v1/users")
