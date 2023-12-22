const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@todolist.mtl9ww0.mongodb.net/`);
        console.log("database connected successfully")
    } catch (error) {
        console.log("database error");
        console.log(error)
    }
}

module.exports = dbConnect;