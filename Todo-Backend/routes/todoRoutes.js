const express = require("express");
const Todo = require("../models/todo");
const router = express.Router();

// Create a todo
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTodo = new Todo({ title, description });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

// Update a todo
router.put("/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    const id = req.params.id;
    const updateTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!updateTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(updateTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

module.exports = router;
