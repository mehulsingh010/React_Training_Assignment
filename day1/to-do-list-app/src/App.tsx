import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import Assignment2 from "./components/Assignment2";
import ToDoList from "./components/ToDoList";
import Navbar from "./components/Navbar/Navbar";
import Assignment3 from "./components/Assignment3.tsx/Assignment3";
import ViewTask from "./components/Assignment3.tsx/ViewTask";
import Assg3 from "./components/Assignment3.tsx/assg3";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<ToDoList />} />
          <Route path="/assignment-2" element={<Assignment2 />} />
          <Route path="/assignment-3" element={<Assignment3 />}>
            <Route
              index
              element={<Navigate to="/assignment-3/add-task" replace />}
            />
            <Route path="add-task" element={<Assg3 />} />
            <Route path="view-task" element={<ViewTask />} />
            <Route path="view-task/:task" element={<ViewTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
