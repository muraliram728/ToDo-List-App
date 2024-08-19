import "./Todo.css";
import { useEffect, useState } from "react";
import { 
  handleSubmit, 
  handleEdit, 
  handleUpdate, 
  handleEditCancel, 
  handleDelete, 
  getItems 
} from "./TodoService";

function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [editId, setEditId] = useState(-1);

  // edit
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const apiUrl = "http://localhost:8000";

  useEffect(() => {
    getItems(setTodos, apiUrl);
  }, []);

  return (
    <>
      <div className="row bg-success text-light">
        <h1>ToDo project with MERN stack!</h1>
      </div>

      <div>
        <h3 className="text-white">Add Item</h3>
        {message && <p className="text-success"> {message} </p>}
        <div className="form-group d-flex gap-md ">
          <input
          className="custom-gap"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          />

          <input
          className="custom-gap"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
          />

          <button
            className="btn btn-dark"
            onClick={() => handleSubmit(title, description, todos, setTodos, setMessage, setTitle, setDescription, setError, apiUrl)}
          >
            Submit
          </button>
        </div>
        {error && <p className="text-danger">{error}</p>}
      </div>

      <div className="container mt-3">
        <h3  className="text-white">Task</h3>
        <div className="col-md-6">
          <ul className="list-group">
            {todos.map((item) => (
              <li
                key={item._id}
                className="list-group-item d-flex justify-content-between align-items-center my-2"
              >
                <div className="d-flex flex-column">
                  {editId === item._id ? (
                    <>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Title"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        id="title"
                      />

                      <input
                        className="form-control custominput-gap"
                        type="text"
                        placeholder="Description"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        id="description"
                      />
                    </>
                  ) : (
                    <>
                      <span className="fw-bold">{item.title}</span>
                      <span>{item.description}</span>
                    </>
                  )}
                </div>
                <div className="d-flex gap-2">
                  {editId === item._id ? (
                    <>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleUpdate(editTitle, editDescription, editId, todos, setTodos, setMessage, setEditTitle, setEditDescription, setError, apiUrl, setEditId)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleEditCancel(setEditId)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary custom-gap"
                        onClick={() => handleEdit(item, setEditId, setEditTitle, setEditDescription)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger "
                        onClick={() => handleDelete(item._id, todos, setTodos, apiUrl)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
