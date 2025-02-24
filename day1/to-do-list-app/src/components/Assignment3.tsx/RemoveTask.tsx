import { useContext } from "react";
import TaskContext from "../context/context";
import { TaskComponentProps } from "./MarkTaskAsDone";

export default function RemoveTask({ index, task }: TaskComponentProps) {
  const { tasks, setTasks } = useContext(TaskContext);

  const handleRemoveTask = () => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <button onClick={() => handleRemoveTask()} className="remove-button">
      &#10005;
    </button>
  );
}
