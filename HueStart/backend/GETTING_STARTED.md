# HueStart Backend - Getting Started Guide

## ✅ Current Status

Your backend is **fully operational** with the following features:

### What's Running:
- ✅ PostgreSQL database (port 5432)
- ✅ FastAPI application (port 8000)
- ✅ Alembic database migrations configured
- ✅ User authentication and CRUD operations

### Available Endpoints:

1. **Health Check**: `GET http://localhost:8000/api/v1/health`
2. **API Documentation**: `http://localhost:8000/docs` (Interactive Swagger UI)
3. **Alternative Docs**: `http://localhost:8000/redoc`

### User Management Endpoints:

- `POST /api/v1/users/register` - Register a new user
- `POST /api/v1/users/login` - Login and get JWT token
- `GET /api/v1/users/me` - Get current user info (requires authentication)
- `GET /api/v1/users/` - List all users
- `GET /api/v1/users/{user_id}` - Get user by ID
- `PUT /api/v1/users/{user_id}` - Update user
- `DELETE /api/v1/users/{user_id}` - Delete user

## 🚀 Quick Start

### 1. Start All Services
```bash
cd backend
docker-compose up -d
```

### 2. View Logs
```bash
# View all logs
docker-compose logs -f

# View only web service logs
docker-compose logs -f web

# View only database logs
docker-compose logs -f db
```

### 3. Stop Services
```bash
docker-compose down
```

## 📋 Testing the API

### Using the Interactive Documentation

1. Visit `http://localhost:8000/docs`
2. Try the `/api/v1/users/register` endpoint:
   ```json
   {
     "username": "testuser",
     "email": "test@example.com",
     "password": "testpass123",
     "role": "user"
   }
   ```
3. Use the returned token for authenticated endpoints

### Using cURL

**Register a user:**
```bash
curl -X POST http://localhost:8000/api/v1/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "testpass123",
    "role": "user"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:8000/api/v1/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "password": "testpass123"
  }'
```

**Get current user (with token):**
```bash
curl -X GET http://localhost:8000/api/v1/users/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## 🔧 Development Workflow

### Database Migrations

The backend automatically runs migrations when the web service starts, but you can also run them manually:

```bash
# Run migrations manually
docker-compose run --rm migrate

# Create a new migration
docker-compose run --rm migrate alembic revision --autogenerate -m "Your migration message"
```

### Rebuilding After Code Changes

After adding new dependencies to `requirements.txt`:
```bash
docker-compose build --no-cache
docker-compose up -d
```

## 📁 Project Structure

```
backend/
├── app/
│   ├── api/
│   │   └── v1/
│   │       └── routes/
│   │           ├── health.py    # Health check endpoint
│   │           └── users.py     # User management endpoints
│   ├── crud/
│   │   └── user.py              # Database operations
│   ├── db/
│   │   ├── base_class.py        # SQLAlchemy base
│   │   └── session.py           # Database session
│   ├── models/
│   │   └── user.py              # User database model
│   ├── schemas/
│   │   └── user.py              # Pydantic schemas for validation
│   └── main.py                  # FastAPI app entry point
├── alembic/                      # Database migrations
├── scripts/
│   └── wait_and_migrate.sh      # Migration script
├── docker-compose.yml
├── Dockerfile
└── requirements.txt
```

## 🔒 Security Notes

- The JWT secret key is currently hardcoded for development
- For production, use environment variables for sensitive data
- Update `SECRET_KEY` in `app/api/v1/routes/users.py`
- Consider implementing password strength requirements
- Add rate limiting for authentication endpoints

## 🎯 Next Steps

### Immediate:
1. ✅ Test user registration and login
2. ✅ Explore the API documentation at `/docs`
3. ✅ Verify database migrations are working

### Short-term:
1. Add more models (e.g., projects, signatures, etc.)
2. Implement email verification
3. Add role-based access control (RBAC)
4. Add unit and integration tests
5. Set up environment-specific configurations (dev, staging, prod)

### Long-term:
1. Add file upload functionality
2. Implement WebSocket support for real-time features
3. Add caching (Redis)
4. Set up CI/CD pipeline
5. Add monitoring and logging (e.g., Sentry, Logstash)

## 🐛 Troubleshooting

### Database connection issues:
```bash
# Check if database is running
docker-compose ps

# Restart database
docker-compose restart db
```

### Port conflicts:
If port 8000 or 5432 are already in use:
```bash
# Edit docker-compose.yml to change ports
# Example: "8888:8000" instead of "8000:8000"
```

### Clear everything and start fresh:
```bash
docker-compose down -v  # Removes volumes (deletes data)
docker-compose up -d
```

## 📞 Need Help?

- Check logs: `docker-compose logs -f web`
- View API docs: http://localhost:8000/docs
- FastAPI documentation: https://fastapi.tiangolo.com/
- SQLAlchemy documentation: https://docs.sqlalchemy.org/

