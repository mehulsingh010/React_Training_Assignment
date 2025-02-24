import { useContext } from "react";
import TaskContext, { Task } from "../context/context";

export interface TaskComponentProps {
  index: number;
  task: Task;
}

export default function MarkTaskAsDone({ index, task }: TaskComponentProps) {
  const { tasks, setTasks } = useContext(TaskContext);

  const handleMarkAsDone = () => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <input
      type="checkbox"
      className="task-checkbox"
      checked={task.done}
      onChange={() => handleMarkAsDone()}
    />
  );
}
