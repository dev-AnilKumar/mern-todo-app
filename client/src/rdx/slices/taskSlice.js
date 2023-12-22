import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

const API_URL = 'http://localhost:5000';

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    const { data } = await axios.get(`${API_URL}/todos/alltasks`);
    return data;
})

export const addTask = createAsyncThunk("tasks/addTask", async (taskData) => {
    const { data } = await axios.post(`${API_URL}/todos/create`, taskData);
    return data;
})

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
    const { data } = await axios.delete(`${API_URL}/todos/delete/${id}`);
    return data;
})

export const completeTask = createAsyncThunk("tasks/completeTask", async (id) => {
    const { data } = await axios.put(`${API_URL}/todos/complete/${id}`);
    return data;
})

export const updateTask = createAsyncThunk("tasks/updateTask", async (taskData) => {
    const { data } = await axios.put(`${API_URL}/todos/update`, taskData);
    return data;
})



export const TaskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            return action.payload
        })
            .addCase(addTask.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                return state.filter((task) => task._id !== action.payload._id)
            })
            .addCase(completeTask.fulfilled, (state, action) => {
                return state.map((task) => {
                    if (task._id === action.payload._id) {
                        task=action.payload;
                    }
                    return task;
                })
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                return state.map((task) => {
                    if (task._id === action.payload._id) {
                        task = action.payload;
                    }
                    return task;
                })
            })
    }
})

export const getallTasks = (state) => state.tasks;

export default TaskSlice.reducer;