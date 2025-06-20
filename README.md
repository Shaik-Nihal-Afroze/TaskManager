# 📝 Task Manager - Full Stack Project

A simple Task Manager web application with a Node.js + Express + PostgreSQL backend and a Next.js frontend. Users can add, edit, delete, and view tasks. Deployed on **Render (backend)** and **Vercel (frontend)**.

---

## 🎯 Project Objective

Build a minimal full-stack Task Manager web application with:

* A RESTful API backend (Node.js + Express + TypeORM + PostgreSQL)
* A minimal frontend UI using Next.js and plain CSS
* No user authentication required

---

## 🔧 Tech Stack

| Layer      | Tech                                     |
| ---------- | ---------------------------------------- |
| Backend    | Node.js, Express.js, TypeORM, PostgreSQL |
| Frontend   | Next.js (React), plain CSS               |
| Deployment | Render (API & DB), Vercel (Frontend)     |

---

## 📁 Project Structure


TaskManager/
├── backend/     # Node.js + Express + TypeORM
├── frontend/    # Next.js + plain CSS
├── .gitignore
└── README.md


---

## 🖥️ Local Setup Instructions

### ✅ Prerequisites

* Node.js (v18+)
* PostgreSQL (local or hosted)
* Git (for cloning the repository)

---

## 🔙 Backend Setup

### 1. Navigate to the backend folder

bash
cd backend


### 2. Install dependencies

bash
npm install


### 3. Create .env file

Create a .env file in /backend:




DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_DATABASE=task_manager


### 4. Run PostgreSQL locally

* Ensure PostgreSQL is installed and running.
* Create a database named task_manager`.

### 5. Start the backend server

bash
npm run dev


It will run at: http://localhost:3001

---

## 🌐 Frontend Setup

### 1. Navigate to the frontend folder

bash
cd frontend


### 2. Install dependencies

bash
npm install


### 3. Create `.env.local`

env
NEXT_PUBLIC_API_URL=http://localhost:3001


### 4. Start the development server

bash
npm run dev


App will run at: http://localhost:3000

---

## 🚀 Deployment URLs

| Layer    | Platform | URL                                                                                  |
| -------- | -------- | ------------------------------------------------------------------------------------ |
| Backend  | Render   | [https://taskmanager-wkty.onrender.com](https://taskmanager-wkty.onrender.com)       |
| Frontend | Vercel   | [https://task-manager-plum-eta.vercel.app](https://task-manager-plum-eta.vercel.app) |

Update the deployed API URL in `frontend/.env.local` like:

env
NEXT_PUBLIC_API_URL=https://taskmanager-wkty.onrender.com


---

## 📦 API Endpoints

### Task Routes

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | /tasks       | List all tasks  |
| POST   | /tasks       | Create new task |
| GET    | /tasks/:id | Get task by ID  |
| PUT    | /tasks/:id | Update task     |
| DELETE | /tasks/:id | Delete task     |

---

## ✅ Features

* Add / Edit / Delete Tasks
* View all tasks
* Enum status: todo, in\_progress, done
* Reusable TaskForm component
* CORS configured for both local and deployed frontend URLs
* Responsive layout (mobile-friendly)
* Clean UI with plain CSS (no UI library)


