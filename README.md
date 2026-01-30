# Meditrack

Meditrack is an application designed to track the different steps before a surgery, with a focus on accessibility for all users.

## Technical Choices
- **Frontend:** Vue.js (Vite) for a fast, modern, and modular UI.
- **Backend:** Node.js with Express for a simple, scalable API.
- **Database:** Supabase for easy authentication and real-time data.

The project is split into `frontend` and `backend` folders for clear separation of concerns.

## Prerequisites
- Node.js (v16+)
- npm or yarn
- (Optional) Supabase CLI if you want a local Supabase instance

## Environment
Create `.env` files in `frontend` and `backend` as needed. Typical variables:

- backend/.env
    - DATABASE_URL=your_database_url
    - SUPABASE_URL=https://xyz.supabase.co
    - SUPABASE_ANON_KEY=your_anon_key
    - PORT=3000

- frontend/.env
    - VITE_SUPABASE_URL=https://xyz.supabase.co
    - VITE_SUPABASE_ANON_KEY=your_anon_key
    - VITE_API_BASE=http://localhost:3000

Do not commit secrets to git.

## Local setup

1. Clone and enter repo:
     ```bash
     git clone <repo-url>
     cd Meditrack
     ```

2. Install dependencies (run in both folders):
     ```bash
     cd backend
     npm install
     # or: yarn

     cd ../frontend
     npm install
     ```

## Running locally

- Start backend:
    ```bash
    cd backend
    npm run dev
    # or: node index.js / nodemon, depending on scripts
    ```

- Start frontend:
    ```bash
    cd frontend
    npm run dev
    # then open the printed Vite URL, usually http://localhost:5173
    ```