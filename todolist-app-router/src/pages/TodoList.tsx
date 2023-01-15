import React from "react";
import { CallbacksType, StatesType } from "../AppContainer";
import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";

type PropsType = { states: StatesType; callbacks: CallbacksType };

const TodoList = ({ states, callbacks }: PropsType) => {
  const todoItems = states.todoList.map((item) => <TodoItem key={item.id} todoItem={item} callbacks={callbacks} />);

  return (
    <>
      <div className="row">
        <div className="col p-3">
          <Link className="btn btn-primary" to="/todos/add">
            할 일 추가
          </Link>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-group">{todoItems}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
