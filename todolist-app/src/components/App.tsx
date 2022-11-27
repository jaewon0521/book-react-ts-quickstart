import React from "react";
import { TodoListItemType } from "../AppContainer";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

type AppProps = {
  todoList: Array<TodoListItemType>;
  addTodo: (todo: string) => void;
  deleteTodo: (no: number) => void;
  toggleDone: (no: number) => void;
};

const App = ({ todoList, addTodo, deleteTodo, toggleDone }: AppProps) => {
  console.log("App");
  return (
    <div className="container">
      <div className="card card-body bg-light">
        <div className="title">:: TodoList App</div>
      </div>
      <div className="card card-default card-borderless">
        <div className="card-body">
          <InputTodo addTodo={addTodo} />
          <TodoList todoList={todoList} toggleDone={toggleDone} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
