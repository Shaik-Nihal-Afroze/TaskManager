import TaskForm from "../components/TaskForm";
import axios from "axios";
import { useRouter } from "next/router";

const AddTask = () => {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, formData);
      router.push("/");
    } catch (error) {
      console.error("Error creating task", error);
    }
  };

  const initialValues = {
    title: "",
    description: "",
    status: "todo",
    dueDate: "",
  };

  return (
    <div className="container">
      <h2>Add New Task</h2>
      <TaskForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddTask;
