const TaskModel = require("../models/task.model");

class TaskController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    async getAll() {
        try {
            const task = await TaskModel.find({});
            this.res.status(200).send(task);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }

    async getById() {
        try {
            const taskId = this.params.id;
    
            const task = await TaskModel.findById(taskId);
    
            if (!task) {
                return this.status(404).send("Essa tarefa não foi encontrada.");
            }
            return this.status(200).send(task);
        } catch (error) {
            this.status(500).send(error.message);
        }
    }

    async create() {
        try {
            const newTask = new TaskModel(req.body);
    
            await newTask.save();
    
            res.status(201).send(newTask);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = TaskController;
