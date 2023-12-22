const express = require('express');
const { createTask, getallTask, deleteTask, completeTask, updateTask } = require('../controller/taskCtrl');

const router = express.Router();

router.post('/create', createTask)
router.get('/alltasks', getallTask)
router.delete('/delete/:id', deleteTask)
router.put('/complete/:id', completeTask)
router.put('/update', updateTask)

module.exports = router