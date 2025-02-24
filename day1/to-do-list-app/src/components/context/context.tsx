import { createContext, Dispatch, SetStateAction } from "react";

export interface Task {
  text: string;
  done: boolean;
}

export interface TaskContextType {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextType>({} as TaskContextType);

export default TaskContext;
