# Rule Engine Application

This is a simple rule engine application that determines user eligibility based on their attributes (e.g., age, income, department, spend). The application consists of a 3-tier architecture: frontend (UI), backend (API), and a MongoDB database.

## Architecture

- **Frontend**: Simple UI served by Nginx.
- **Backend**: Node.js/Express.js API for rule creation and evaluation.
- **Database**: MongoDB for storing rules and AST.

## Prerequisites

- Docker
- Docker Compose

## How to Build and Run the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/rule-engine-app.git
   cd rule-engine-app
