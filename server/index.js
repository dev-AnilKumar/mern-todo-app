const express = require("express");
const dbConnect = require("./database/db");
const app = express();
const cors = require('cors')
const todoRoute = require('./routes/todoRoute')
const dotenv = require('dotenv').config();


dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "https://mern-todo-app.netlify.app"
}))

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`server is running on port ${PORT}`)
})

app.use('/todos', todoRoute)