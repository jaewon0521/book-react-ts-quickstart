import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CallbacksType, StatesType } from "./AppContainer";

import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";
import NotFound from "./pages/NotFound";

type PropsType = {
  states: StatesType;
  callbacks: CallbacksType;
};

const App = ({ states, callbacks }: PropsType) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="todos" element={<TodoList states={states} callbacks={callbacks} />} />
          <Route path="todos/add" element={<AddTodo callbacks={callbacks} />} />
          <Route path="todos/edit/:id" element={<EditTodo states={states} callbacks={callbacks} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
