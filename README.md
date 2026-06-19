# o2h DevOps Practical Assessment

This repository contains the solution for the o2h DevOps Fresher Assessment.

## Project Structure

```
o2h-devops-assessment/
│
├── README.md
├── Dockerfile
├── app.js
├── package.json
├── package-lock.json
├── Linux_Commands.md
├── Troubleshooting.md
├── script.sh
├── screenshots/
└── .github/
    └── workflows/
        └── workflow.yml
```

## Task 1: Git & GitHub

- Created local Git repository
- Created feature branch `feature/homepage`
- Updated README
- Merged changes into main branch
- Pushed code to GitHub

## Task 2: Linux Administration

Implemented commands for:

- Current user
- Disk usage
- Memory usage
- Finding .log files
- Creating backup folder
- Compressing directories

File:
- Linux_Commands.md

## Task 3: Dockerization

Created a Docker container for a Node.js application.

### Build Docker Image

```bash
docker build -t o2h-app .
```

### Run Docker Container

```bash
docker run -p 3000:3000 o2h-app
```

Application URL:

```
http://localhost:3000
```

Output:

```
Hello from o2h DevOps Assessment
```

## Task 4: CI/CD Pipeline

Implemented GitHub Actions workflow.

Workflow:

```
Developer Push
     ↓
GitHub
     ↓
Build
     ↓
Run Tests
     ↓
Docker Build
     ↓
Deploy
```

File:

```
.github/workflows/workflow.yml
```

## Task 5: Troubleshooting

### Scenario 1

Docker container exits immediately after startup.

#### Debugging Commands

```bash
docker ps -a
docker logs <container_id>
docker inspect <container_id>
```

### Scenario 2

Application works locally but not on server.

#### Commands

```bash
docker ps
netstat -tulnp
curl localhost:3000
```

File:

- Troubleshooting.md

## Task 6: Bonus Bash Script

Created a Bash script that:

- Creates a backup folder
- Copies all `.txt` files into the backup folder
- Displays success message

Run:

```bash
chmod +x script.sh
./script.sh
```

Output:

```
Backup completed successfully
```

## Technologies Used

- Git
- GitHub
- Linux
- Docker
- GitHub Actions
- Bash Scripting
- Node.js

## Author

Vamsi Yanamala