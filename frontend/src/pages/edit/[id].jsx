import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import TaskForm from "../../components/TaskForm";

const EditTask = () => {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`)
        .then((res) => setFormData(res.data))
        .catch((err) => console.error("Error loading task", err));
    }
  }, [id]);

  const handleSubmit = async (updatedTask) => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, updatedTask);
      router.push("/");
    } catch (error) {
      console.error("Error updating task", error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Task</h2>
      {formData ? (
        <TaskForm initialValues={formData} onSubmit={handleSubmit} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditTask;
