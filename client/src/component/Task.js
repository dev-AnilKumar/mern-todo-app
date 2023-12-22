import React, { useState } from 'react';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask, updateTask } from '../rdx/slices/taskSlice';

const Task = ({ value }) => {
    const [edit, setEdit] = useState(false);
    const [updatedvalue, setUpdatedvalue] = useState(value.task);

    const dispatch = useDispatch();

    const changestatus = (id) => {
        if (value.status !== "Completed" && !edit) {
            dispatch(completeTask(id));
        }
    }

    const submithandler = (e) => {
        e.preventDefault();
        dispatch(updateTask({ id: value._id, task: updatedvalue }))
        setEdit(false);
    }
    return (
        <div className='task'>
            <div className={`task_data ${value.status === "Completed" ? 'completed_task_btn' : ""}`} >
                {value.status !== "Completed" ? <MdOutlineCheckBoxOutlineBlank cursor="pointer" size={22} color='#fff' onClick={() => changestatus(value._id)} /> : <MdCheckBox size={22} color='#FFF' />}

                {edit ? <form onSubmit={submithandler}><input className='updateinput' value={updatedvalue} onChange={(e) => setUpdatedvalue(e.target.value)} /> </form> : <h5>{value.task} </h5>}

            </div>
            <div className='task_edit' style={value.status !== "Completed"? {display:"grid"}:{display:"none"} } onClick={() => setEdit(true)}>
                 <MdEdit />
            </div>
            <div className='task_delete' onClick={() => dispatch(deleteTask(value._id))}>
                <MdDelete />
            </div>
        </div>
    )
}

export default Task