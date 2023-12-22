const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Active",
    },

}, {
    timestamps: true,
});

//Export the model
module.exports = mongoose.model('Tasks', taskSchema);