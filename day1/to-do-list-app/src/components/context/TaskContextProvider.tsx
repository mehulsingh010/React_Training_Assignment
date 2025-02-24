import { ReactNode, useState } from "react";
import TaskContext, { Task, TaskContextType } from "./context";

type Props = { children: ReactNode };

export default function TaskContextProvider({ children }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const context: TaskContextType = { tasks, setTasks };

  return (
    <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
  );
}
