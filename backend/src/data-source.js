import { DataSource } from "typeorm";
import Task from "./entity/Task.js";
import dotenv from 'dotenv'
dotenv.config()

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username:process.env.DB_USER ,
  password: process.env.DB_PASSWORD,
  database:process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Task],
});

export default AppDataSource;
