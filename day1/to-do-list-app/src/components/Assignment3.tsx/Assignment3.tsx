import { Outlet } from "react-router";
import Navbar from "./Navbar";

import Assg3 from "./assg3";
import TaskContextProvider from "../context/TaskContextProvider";

export default function Assignment3() {
  return (
    <div>
      <Navbar />
      <h1>Assignment3</h1>

      <TaskContextProvider>
        <Outlet />
      </TaskContextProvider>
    </div>
  );
}
