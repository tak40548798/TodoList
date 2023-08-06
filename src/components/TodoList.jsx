import { useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addItem, deleteItem, updateItem } from "../actions/TodoActions";
// import { TodoItem, TodoItemMemo } from "./TodoItem";

function TodoList({ TodoItem }) {
  const todoItems = useSelector((state) => state.todoItems); // 從 store 中取得狀態
  return (
    <div className="todo-app-list">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
          edited={item.edited}
        />
      ))}
    </div>
  );
}

export { TodoList };
