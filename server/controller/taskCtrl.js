const Task = require('../models/todoModel');


const createTask = async (req, res) => {
    try {
        const response = await Task.create(req.body);
        res.status(200).json(response);
    } catch (error) {
        console.log("falied to create", error.message)
    }
}

const deleteTask = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await Task.findByIdAndDelete(id);
        res.status(200).json(deletedUser);
    } catch (error) {
        console.log("falied to delete", error.message)
    }
}
const completeTask = async (req, res) => {
    const id = req.params.id;
    try {
        const completedTask = await Task.findByIdAndUpdate(id, {
            status: "Completed",
        }, {
            new: true,
        });
        res.status(200).json(completedTask);
    } catch (error) {
        console.log("falied to complete", error.message)
    }
}
const updateTask = async (req, res) => {
    const id = req.body.id;
    const task = req.body.task;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, {task}, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        console.log("falied to update", error.message)
    }
}



const getallTask = async (req, res) => {
    try {
        const response = await Task.find().sort({ 'createdAt': -1 });
        res.json(response);
    } catch (error) {
        console.log("falied to find tasks", error.message)
    }
}



module.exports = { createTask, getallTask, deleteTask, completeTask, updateTask }