import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getallTasks } from '../rdx/slices/taskSlice'
import Task from './Task';

const Tasks = () => {
    const [taskStatus, setTaskStatus] = useState("All");

    const tasks = useSelector(getallTasks);

    const newtasks = tasks.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));

    const activeTasks = newtasks.filter((task) => task.status === "Active");
    const completedTasks = newtasks.filter((task) => task.status !== "Active");

    let content;
    if (newtasks.length) {
        if (taskStatus === "All") {
            content = <div className='tasks'>
                {activeTasks.map((task) => {
                    return <Task key={task._id} value={task} />
                })}
                {completedTasks.map((task) => {
                    return <Task key={task._id} value={task} />
                })}
            </div>
        } else if (taskStatus === "Active") {
            content = <div className='tasks'>
                {activeTasks.map((task) => {
                    return <Task key={task._id} value={task} />
                })}
            </div>
        } else {
            content = <div className='tasks'>
                {completedTasks.map((task) => {
                    return <Task key={task._id} value={task} />
                })}
            </div>
        }
    } else {
        content = <div className='tasks'>
            <div className='task_img'>
            </div>
        </div>;
    }


    return (
        <div className='tasks_container'>
            <div className='task_status'>
                <div className={`task_status_btn ${taskStatus === "All" ? "btn_active" : ""}`} onClick={() => setTaskStatus("All")}>All Tasks</div>
                <div className={`task_status_btn ${taskStatus === "Active" ? "btn_active" : ""}`} onClick={() => setTaskStatus("Active")}>Active Tasks</div>
                <div className={`task_status_btn ${taskStatus === "Completed" ? "btn_active" : ""}`} onClick={() => setTaskStatus("Completed")}>Completed Tasks</div>
            </div>
            {content}
            {/* <div className='undo_btn' style={btnStatus? {display:"block"}:{display:"none"}}>
                <span>Undo</span>
                <div className='time_line' style={btnStatus? {width:"0%"}:{width:"100%"}}></div>
            </div> */}
        </div>
    )
}

export default Tasks