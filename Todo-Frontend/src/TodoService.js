//todoService.js

export const handleSubmit = (
  title,
  description,
  todos,
  setTodos,
  setMessage,
  setTitle,
  setDescription,
  setError,
  apiUrl
) => {
  setError("");
  if (title.trim() !== "" && description.trim() !== "") {
    fetch(apiUrl + "/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => {
        if (res.ok) {
          setTodos([...todos, { title, description }]);
          setMessage("Item added successfully");
          setTitle("");
          setDescription("");
          setTimeout(() => {
            setMessage("");
          }, 3000);
        } else {
          setError("Unable to create Todo item");
        }
      })
      .catch(() => {
        setError("Unable to create Todo item");
      });
  }
};

export const handleEdit = (
  item,
  setEditId,
  setEditTitle,
  setEditDescription
) => {
  setEditId(item._id);
  setEditTitle(item.title);
  setEditDescription(item.description);
};

export const handleUpdate = (
  editTitle,
  editDescription,
  editId,
  todos,
  setTodos,
  setMessage,
  setEditTitle,
  setEditDescription,
  setError,
  apiUrl,
  setEditId
) => {
  setError("");
  if (editTitle.trim() !== "" && editDescription.trim() !== "") {
    fetch(apiUrl + "/todos/" + editId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: editTitle, description: editDescription }),
    })
      .then((res) => {
        if (res.ok) {
          const updatedTodos = todos.map((item) => {
            if (item._id === editId) {
              item.title = editTitle;
              item.description = editDescription;
            }
            return item;
          });
          setTodos(updatedTodos);
          setMessage("Item updated successfully");
          setEditTitle("");
          setEditDescription("");
          setTimeout(() => {
            setMessage("");
          }, 3000);
          setEditId(-1);
        } else {
          setError("Unable to update Todo item");
        }
      })
      .catch(() => {
        setError("Unable to update Todo item");
      });
  }
};

export const handleEditCancel = (setEditId) => {
  setEditId(-1);
};

export const handleDelete = (_id, todos, setTodos, apiUrl) => {
  if (window.confirm("Are you sure you want to delete?")) {
    fetch(apiUrl + "/todos/" + _id, {
      method: "DELETE",
    }).then(() => {
      const updatedTodos = todos.filter((item) => item._id !== _id);
      setTodos(updatedTodos);
    });
  }
};

export const getItems = (setTodos, apiUrl) => {
  fetch(apiUrl + "/todos")
    .then((res) => res.json())
    .then((res) => {
      setTodos(res);
    });
};
