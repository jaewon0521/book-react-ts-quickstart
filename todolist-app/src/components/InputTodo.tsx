import React, { useState } from "react";

type InputTodoProps = {
  addTodo: (todo: string) => void;
};

const InputTodo = ({ addTodo }: InputTodoProps) => {
  const [todo, setTodo] = useState<string>("");

  console.log("InputTodo");

  const addHandler = () => {
    addTodo(todo);
    setTodo("");
  };

  const enterInput = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addHandler();
    }
  };

  const ChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group">
          <input
            id="msg"
            type="text"
            className="form-control"
            name="msg"
            placeholder="할 일을 입력하세요."
            value={todo}
            onChange={ChangeTodo}
            onKeyUp={enterInput}
          />
          <span className="btn btn-primary input-group-addon" onClick={addHandler}>
            추가
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputTodo;
