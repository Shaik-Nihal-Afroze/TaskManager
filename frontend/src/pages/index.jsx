import { useEffect, useState } from "react";
import axios from "axios";
import TaskCard from "../components/TaskCard";
import Link from "next/link";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`https://taskmanager-wkty.onrender.com/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`);
      fetchTasks(); // refresh after delete
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  return (
    <div className="container">
      <h1>📝 Task Manager</h1>
      <Link href="/add"><button>Add New Task</button></Link>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map(task => (
          <TaskCard key={task.id} task={task} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

export default Home;
