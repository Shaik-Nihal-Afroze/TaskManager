import Link from "next/link";

const TaskCard = ({ task, onDelete }) => {
  return (
    <div style={{
      background: "#fff",
      padding: "16px",
      margin: "12px 0",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Due:</strong> {task.dueDate || "N/A"}</p>

      <Link href={`/edit/${task.id}`}><button>Edit</button></Link>
      <button className="delete" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
