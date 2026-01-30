# Backend

This folder contains the backend code for the Meditrack application, which manages the server-side logic and API endpoints for tracking pre-surgery steps.

## Context
The backend is responsible for:
- Handling API requests from the frontend
- Managing user authentication and data storage via Supabase
- Providing endpoints to create, read, update, and delete data related to surgery preparation steps and appointments

## Structure
- `server.js`: Main entry point, sets up the Express server
- `api/`: Contains route definitions and API logic
- `package.json`: Project dependencies and scripts

## Technical Choices
- **Runtime:** Node.js
- **Framework:** Express
- **Database & Auth:** Supabase

The backend is designed for reliability, scalability, and easy integration with the Vue.js frontend.