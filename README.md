# Todo Charm – MERN Todo App with Docker

## Group Information

- Student 1: Hasniya Banu – ITBIN-2313-0015 – Role: DevOps Engineer
- Student 2: Fathima Asna Mohamed Rawfeek – ITBIN-2313-0010 – Role: Frontend Developer
- Student 3: Noordeen Natheera Asra – ITBIN-2313-0011 – Role: Backend Developer

## About the Project

Todo Charm is a React-based task management application where users can add, delete, and mark tasks as complete. It also has a filter for All, Active, and Completed tasks, and a progress bar showing how many tasks are done.

Live URL: https://todo-mernapp.vercel.app/

## Technologies Used

- React.js (Vite)
- HTML5, CSS3, JavaScript (ES6+)
- Node.js and Express.js
- MongoDB
- Docker and Docker Compose
- Git and GitHub
- GitHub Actions for CI/CD
- Vercel for deployment

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks by All, Active, or Completed
- Dynamic progress bar
- Local storage persistence
- Responsive UI
- Automated CI/CD workflow
- Fully containerized with Docker

## Project Structure
src/
  client/              React frontend
    App.js
    api.js
    App.css
    Dockerfile
  server/              Node.js backend
    server.js
    config/db.js
    routes/todoRoutes.js
    models/todoModel.js
    Dockerfile
docker-compose.yml
.dockerignore
README.md


## Docker Setup

This is the easiest way to run the full app. You do not need Node.js or MongoDB installed separately.

### What you need

- Docker Desktop installed on your computer

### Step 1 - Clone the repo

git clone https://github.com/Hasniya-0/todo-mern.git
cd todo-mern


### Step 2 - Create a .env file

Create a file called .env in the root folder and add this:
MONGO_URI=mongodb://mongo:27017/tododb
PORT=5000


### Step 3 - Build and start all containers
docker compose up --build


This will create and run three containers:

| Service | Port Mapping  |
|---------|--------------|
| client  | 3000 to 80   |
| server  | 5000 to 5000 |
| mongo   | 27017 to 27017 |

### Step 4 - Open in your browser

| What          | URL                              |
|---------------|----------------------------------|
| Frontend app  | http://localhost:3000            |
| Backend API   | http://localhost:5000/api/todos  |
| MongoDB       | mongodb://localhost:27017        |

### Check containers are running
docker ps

### Stop the app
docker compose down

To also delete all saved data:

docker compose down -v


### Common Problems and Fixes

Problem: Backend cannot connect to MongoDB

Fix: Make sure MONGO_URI in .env says mongodb://mongo:27017/tododb and not localhost

Problem: Port already in use

Fix: Change the port number in docker-compose.yml

Problem: Changes not showing after editing code

Fix: Run docker compose up --build again

## Local Setup Without Docker

### What you need

- Node.js v18 or higher
- Git
- MongoDB running locally or MongoDB Atlas account

### Installation

Clone the repository:
git clone https://github.com/Hasniya-0/todo-mern.git
cd todo-mern


Install backend dependencies:
npm install

Go to the frontend folder and install:


cd client
npm install


### Running the App Locally

Open two terminals.

Terminal 1 - Start the backend:
npm start


Backend runs on http://localhost:5000 and MongoDB must be running.

Terminal 2 - Start the frontend:
npm run client


Optional - Run both at the same time:

npm install -g concurrently
concurrently "npm start" "npm run client"


## Backend API

Backend is available at http://localhost:5000/api/todos

| Method | URL              | What it does        |
|--------|------------------|---------------------|
| GET    | /api/todos       | Get all todos       |
| POST   | /api/todos       | Add a new todo      |
| PUT    | /api/todos/:id   | Toggle complete     |
| DELETE | /api/todos/:id   | Delete a todo       |

Example commands:

Get all todos:

curl http://localhost:5000/api/todos


Add new todo:

curl -Method POST -Uri http://localhost:5000/api/todos -Body '{"text":"new todo"}' -ContentType "application/json"

Toggle todo completion:
curl -Method PUT http://localhost:5000/api/todos/<todo_id>


Delete todo:
curl -Method DELETE http://localhost:5000/api/todos/<todo_id>


## Branch Strategy

| Branch                | Purpose                           |
|-----------------------|-----------------------------------|
| main                  | Production branch (auto-deployed) |
| develop               | Integration branch                |
| feature/add-task-ui   | Frontend Add Task feature         |
| feature/add-task-api  | Backend API integration           |
| feature/progress-bar  | Task completion progress bar      |

## Individual Contributions

### Student 1 - Hasniya Banu (DevOps Engineer)

- Repository setup and configuration
- Branch structure creation
- GitHub Actions CI workflow setup
- Deployment automation
- Docker and docker-compose configuration
- Merge conflict resolution

Sample commits:
- chore: initial repository setup
- ci: add CI workflow
- feat: configure automated deployment

### Student 2 - Fathima Asna Mohamed Rawfeek (Frontend Developer)

- Developed task input component
- Implemented task add and delete functionality
- Managed state using React hooks

Sample commits:
- feat: implement add task functionality
- feat: add delete task feature
- refactor: improve task state management

### Student 3 - Noordeen Natheera Asra (Backend Developer)

- Implemented task filtering logic
- Styled application layout
- Added progress bar component and dynamic updates

Sample commits:
- feat: add task filtering feature
- style: enhance UI design
- feat: add progress bar feature

## Deployment Process

1. Developers push feature branches to develop
2. Pull Requests are created and reviewed
3. Approved PRs are merged into develop
4. DevOps Engineer merges develop into main
5. GitHub Actions automatically installs dependencies, runs build, lints code, and deploys to Vercel

## Merge Conflict Documentation

A conflict happened in App.jsx between the feature/progress-bar and feature/add-task-ui branches. It was resolved manually by editing the conflicting lines.

Commit message: fix: resolve merge conflict in App component

## Collaboration Evidence

- Multiple feature branches created
- Minimum 3 meaningful commits from all members
- Pull Requests created and reviewed
- Merge conflict resolved and documented
- CI/CD workflows running successfully

## Challenges Faced

- React state management for tasks
- CI/CD YAML syntax issues
- Backend and frontend connection setup
- Resolving merge conflicts
- Docker networking between containers

## Authors

Hasniya Banu

Fathima Asna Mohamed Rawfeek

Noordeen Natheera Asra

BSc (Hons) in Information Technology

Horizon Campus – Sri Lanka
