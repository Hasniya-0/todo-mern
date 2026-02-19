🚀 Todo Charm – React Task Manager

 👥 Group Information

Student 1: [Hasniya Banu] – [ITBIN-2313-0015] – Role: DevOps Engineer
Student 2: [Fathima Asna Mohamed Rawfeek] – [ITBIN-2313-0010] – Role: Frontend Developer
Student 3: [Noordeen Natheera Asra] – [ITBIN-2313-0011] – Role: Backend Developer


 
 📌 Project Description

Todo Charm is a React-based task management application where users can:

* Add, delete, and mark tasks as complete
* Filter tasks (All / Active / Completed)
* Track task completion progress via a dynamic progress bar
* Enjoy a responsive UI with persistent storage




🌐 Live Deployment

🔗 Live URL: [https://your-todo-charm-url.vercel.app](https://your-todo-charm-url.vercel.app)


 
 🛠 Technologies Used

* React.js (Vite)
* HTML5, CSS3, JavaScript (ES6+)
* Git & GitHub
* GitHub Actions (CI/CD)
* Vercel / Netlify (Cloud Deployment)


 
 ✨ Features

* ✅ Add new tasks
* ✅ Mark tasks as completed
* ✅ Delete tasks
* ✅ Filter tasks (All / Active / Completed)
* ✅ Dynamic progress bar
* ✅ Local storage persistence
* ✅ Responsive UI
* ✅ Automated CI/CD workflow



🌳 Branch Strategy

| Branch                 | Purpose                           |
| ---------------------- | --------------------------------- |
| `main`                 | Production branch (auto-deployed) |
| `develop`              | Integration branch                |
| `feature/add-task-ui`  | Frontend Add Task feature         |
| `feature/add-task-api` | Backend API integration           |
| `feature/progress-bar` | Task completion progress bar      |


 
 
 👤 Individual Contributions

Student 1 (DevOps Engineer)

* Repository setup and configuration
* Branch structure creation
* GitHub Actions CI workflow setup
* Deployment automation
* Merge conflict resolution

Sample commits:

* `chore: initial repository setup`
* `ci: add CI workflow`
* `feat: configure automated deployment`


 
 Student 2 (Frontend Developer)

* Developed task input component
* Implemented task add & delete functionality
* Managed state using React hooks

Sample commits:

* `feat: implement add task functionality`
* `feat: add delete task feature`
* `refactor: improve task state management`



Student 3 (UI/Feature Developer)

* Implemented task filtering logic
* Styled application layout
* Added progress bar component and dynamic updates

Sample commits:

* `feat: add task filtering feature`
* `style: enhance UI design`
* `feat: add progress bar feature`



⚙️ Setup Instructions
Prerequisites
    Node.js (v18 or higher) – Download
    Git – Download
    MongoDB running locally or via MongoDB Atlas


## Installation

Clone the repository
       git clone https://github.com/username/todo-mern.git
       cd todo-mern


## Install dependencies
    *Install backend dependencies
       npm install

## Navigate to frontend folder (if separate)
     cd client
     npm install


##Running the Application Locally

You need to run backend and frontend in separate terminals:

1️⃣ Start the backend server
# From project root
    npm start

              /* Backend runs on http://localhost:5000

              MongoDB must be running  

              Terminal output:

              🚀 Server running on http://localhost:5000
              ✅ MongoDB Connected   */

2️⃣ Start the frontend React app
# From project root
    npm run client



 ##  Optional: Run Both Together
     npm install -g concurrently
     concurrently "npm start" "npm run client"

## 🚀 Deployment Process
      Developers push feature branches → develop
      Pull Requests created and reviewed
      Approved PRs merged into develop
      DevOps Engineer merges develop → main
      GitHub Actions automatically:
      Installs dependencies
      Runs build

Lints code
    Deploys to Vercel


⚠️ Merge Conflict Documentation
              Conflict occurred in App.jsx between feature/progress-bar and feature/add-task-ui
              Resolved manually by editing conflicting lines
              Commit message: fix: resolve merge conflict in App component



🧪 Build Status

![CI Pipeline](https://github.com/username/repo-name/workflows/CI%20Pipeline/badge.svg)
![Deploy](https://github.com/username/repo-name/workflows/Deploy%20to%20Production/badge.svg)



🧩 Challenges Faced
          React state management for tasks
          CI/CD YAML syntax issues
          Backend/frontend connection setup
          Resolving merge conflicts

## 📊 Collaboration Evidence

* Multiple feature branches created
* Minimum 3 meaningful commits from all members
* Pull Requests created and reviewed
* Merge conflict resolved and documented
* CI/CD workflows running successfully




## 👩‍💻 Authors

**Hasniya Banu**
**Fathima Asna Mohamed Rawfeek**
**Noordeen Natheera Asra**
BSc (Hons) in Information Technology
Horizon Campus – Sri Lanka
