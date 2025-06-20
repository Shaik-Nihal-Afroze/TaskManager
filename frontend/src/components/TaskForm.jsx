import { useState } from "react";

const TaskForm = ({ initialValues, onSubmit }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title*</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label>Status*</label>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="todo">To Do</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <label>Due Date</label>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;
