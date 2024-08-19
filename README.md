# MERN Todo List Application

This is a full-stack Todo List application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to manage their tasks efficiently with a user-friendly interface.

## Features

- **Add Todos:** Users can create new todo items with a title and description.
- **Edit Todos:** Users can update existing todo items.
- **Delete Todos:** Users can delete tasks that are no longer needed.
- **View Todos:** All created tasks are displayed in a list with their titles and descriptions.
- **Responsive Design:** The application works on both desktop and mobile devices.

## Technologies Used

- **Frontend:** React.js, Bootstrap (or any other CSS framework you're using)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Styling:** CSS (or specify any preprocessor like SASS if used)

## Installation and Setup

### Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2. Install backend dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `backend` directory and add the following environment variables:
    ```env
    MONGO_URI=your-mongodb-connection-string
    PORT=8000
    ```
4. Start the backend server:
    ```bash
    npm start
    ```
   The backend will run on `http://localhost:8000`.

### Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Install frontend dependencies:
    ```bash
    npm install
    ```
3. Start the React frontend:
    ```bash
    npm start
    ```
   The frontend will run on `http://localhost:3000`.

## How to Use

1. Open your browser and go to `http://localhost:3000`.
2. Use the form to add new tasks with a title and description.
3. View, edit, or delete tasks as needed.

## Project Structure

```bash
Learn-MERN/
│
├── backend/       # Express.js backend
│   ├── models/    # Mongoose models (e.g., Todo.js)
│   ├── routes/    # Express routes (e.g., todoRoutes.js)
│   ├── controllers/ # Controller logic for routes
│   └── ...
│
├── frontend/      # React.js frontend
│   ├── src/
│   │   ├── components/ # Reusable components (e.g., Todo.js)
│   │   └── App.js
│   └── ...
│
└── README.md      # Project documentation
