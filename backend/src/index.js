import "reflect-metadata";
import express from "express";
import cors from 'cors'
import AppDataSource from "./data-source.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express()
app.use(cors({
    origin:["http://localhost:3000","https://task-manager-plum-eta.vercel.app"],
    credentials : true,
}))
app.use(express.json())
AppDataSource.initialize().then(()=>{
    console.log("Database connected");
    app.use("/tasks",taskRoutes)
    app.listen(3001,()=>console.log(`Server is running at port:${3001}`))
})
