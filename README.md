# Chattu - Real-time Chat Application Backend

## Overview
This is the backend server for the Chattu real-time chat application, built with Node.js and Express. It handles user authentication, chat management, messaging, and real-time communication using Socket.IO.

## Features
- User registration, login, and authentication with JWT
- Chat creation (private and group)
- Real-time messaging and typing indicators
- File uploads via Cloudinary
- Admin routes for management
- Online user tracking
- Error handling and validation


## Tech Stack
- Node.js
- Express.js
- MongoDB (with Mongoose)
- Socket.IO for real-time features
- JWT for authentication
- Cloudinary for file storage
- Bcrypt for password hashing
- Multer for file uploads
- CORS support

## Installation
1. Clone the repository.
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file based on `.sampleEnv` with variables like:
   - MONGO_URI (MongoDB connection string)
   - PORT (default 3000)
   - JWT_SECRET
   - CLOUDINARY_CLOUD_NAME, API_KEY, API_SECRET
   - ADMIN_SECRET_KEY

## Running the Server
- Development mode (with nodemon):
```bash
npm run dev
```
- Production mode:
```bash
npm start
```

## Project Structure
- `app.js`: Main application entry point
- `constants/`: Configuration and event constants
- `controllers/`: Route handlers for user, chat, admin
- `lib/`: Helpers and validators
- `middlewares/`: Auth, error, multer middlewares
- `models/`: Mongoose schemas for User, Chat, Message, Request
- `routes/`: API routes for user, chat, admin
- `seeders/`: Data seeders for chat and user
- `utils/`: Utility functions

## Key Endpoints
- `/api/v1/user`: User-related (register, login, profile)
- `/api/v1/chat`: Chat operations (create, messages)
- `/api/v1/admin`: Admin management

## Real-time Events
- Uses Socket.IO for events like NEW_MESSAGE, START_TYPING, ONLINE_USERS

## Dependencies
See `package.json` for full list, including dev dependencies like Faker for seeding.

For the frontend README, it seems already updated as per previous interaction. If you need adjustments, let me know.