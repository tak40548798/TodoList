import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, updateItem } from "../actions/TodoActions";

function TodoHeader() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch(); // 取得 dispatch 函式
  return (
    <div className="todo-app-header">
      <input
        className="input input-todo"
        type="text"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <button
        className="button button-todo"
        onClick={() => {
          setTodoText("");
          dispatch(addItem(todoText));
        }}
      >
        新增
      </button>
    </div>
  );
}

export { TodoHeader };
