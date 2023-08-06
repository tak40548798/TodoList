import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, updateItem } from "../actions/TodoActions";

function TodoItem({ id, text, completed, edited }) {
  const [itemText, setItemText] = useState(text);
  
  const dispatch = useDispatch();
  const editingCount = useSelector((state) => state.editing.counter);
  const editingMax = useSelector((state) => state.editing.max);

  const onUpdate = (id, key, value) => {
    dispatch(updateItem(id, key, value));
  };
  const onDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="todo-app-item">
      {/* checkbox */}
      <input
        className="checkbox"
        type="checkbox"
        checked={completed ? true : false}
        onChange={() => {
          onUpdate(id, "completed", !completed);
        }}
      />
      {/* item-task */}
      <div className={`item-task ${completed ? "item-task-completed" : ""}`}>
        {edited ? (
          <span>{text}</span>
        ) : (
          <input
            className="input input-task"
            type="text"
            value={itemText}
            onChange={(e) => {
              setItemText(e.target.value);
            }}
          />
        )}
      </div>
      {/* button-edit、button-update */}
      {edited ? (
        <button
          className="button button-edit"
          onClick={() => {
            if (editingCount < editingMax) {
              onUpdate(id, "edited", !edited);
            } else {
              alert(`有 ${editingCount} 個項目正在編輯中!`);
            }
          }}
        >
          編輯
        </button>
      ) : (
        <button
          className="button button-update"
          onClick={() => {
            onUpdate(id, "text", itemText);
            onUpdate(id, "edited", !edited);
          }}
        >
          更新
        </button>
      )}
      {/* button-delete */}
      <button
        className="button button-delete"
        onClick={() => {
          onDelete(id);
        }}
      >
        刪除
      </button>
    </div>
  );
}

const TodoItemMemo = React.memo(TodoItem);

export { TodoItem, TodoItemMemo };
