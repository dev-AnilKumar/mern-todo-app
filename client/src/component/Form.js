import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../rdx/slices/taskSlice';

const Form = () => {
    const [value, setValue] = useState("");
    const [reqStatus, setReqStatus] = useState("idle");
    const dispatch = useDispatch();


    const cansave = Boolean(value) && reqStatus === "idle";

    const submithandler = (e) => {
        e.preventDefault();
        setReqStatus("pending");
        try {
            if (cansave) {
                dispatch(addTask({task:value}))
                setValue("");
            }
        } catch (error) {
            console.log(error.message)
        } finally {
            setReqStatus("idle");
        }

    }


    return (
        <div className='form_container'>
            <div className='app_heading'>
                <h2>To-Do List</h2>
            </div>
            <div className='app_form'>
                <form onSubmit={submithandler}>
                    <input type='text' placeholder='Enter task' value={value} onChange={(e) => setValue(e.target.value)} />
                    <button disabled={!cansave}>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Form