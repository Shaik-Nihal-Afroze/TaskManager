import AppDataSource from "../data-source.js";



export const getTasks = async(req,res)=>{
    try {
        const repo =  AppDataSource.getRepository("Task")
        const tasks = await repo.find()
        res.json(tasks)
    } catch (error) {
        res.status(500).json("Error in fetching tasks")
    }    
}

export const createTask = async(req,res)=>{
    try {
        const repo =  AppDataSource.getRepository("Task")
        const task =  repo.create(req.body)
        const newTask = await repo.save(task)
        res.json({
            id:newTask.id,
            title:newTask.title,
            description:newTask.description,
            status:newTask.status,
            dueDate:newTask.dueDate,
        
        })
    } catch (error) {
        console.log(`Error in creating task: ${error.message}`)
        res.status(500).json("Error in creating task")
    }
}

export const updateTask = async(req,res)=>{
    try {
        const repo = AppDataSource.getRepository("Task")
        const task = await repo.update(req.params.id,req.body)
        res.send("Task updated")
    } catch (error) {
        res.status(500).json("Error in updating task")
    }
}

export const getTaskById = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository("Task");
    const task = await repo.findOneBy({ id: req.params.id });
    res.json(task);
  } catch (error) {
    res.status(500).json("Error fetching task by ID");
  }
};



export const deleteTask = async(req,res)=>{
    try {
        const  repo = AppDataSource.getRepository("Task")
        await repo.delete(req.params.id)
        res.send("Task deleted")
    } catch (error) {
        
    }
}