const { Schema, model } = require("mongoose");

const TasKSchema = Schema({
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

const TaskModel = model("Task", TasKSchema);

module.exports = TaskModel;
