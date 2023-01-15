import React from "react";
import { useNavigate } from "react-router";
import { CallbacksType, TodoItemType } from "../AppContainer";

type PropsType = { todoItem: TodoItemType; callbacks: CallbacksType };

const TodoItem = ({ todoItem, callbacks }: PropsType) => {
  const navigate = useNavigate();
  const itemClassName = todoItem.done ? "list-group-item list-group-item-success" : "list-group-item";

  return (
    <li className={itemClassName}>
      <span
        className="{todoItem.done ? 'todo-done pointer' : 'pointer"
        onClick={() => callbacks.toggleDone(todoItem.id)}
      >
        {todoItem.todo}
        {todoItem.done ? "(완료)" : ""}
      </span>
      <span className="float-end badge bg-secondary pointer m-1" onClick={() => navigate("/todos/edit/" + todoItem.id)}>
        편집
      </span>
      <span className="float-end badge bg-secondary pointer m-1" onClick={() => callbacks.deleteTodo(todoItem.id)}>
        삭제
      </span>
    </li>
  );
};

export default TodoItem;
