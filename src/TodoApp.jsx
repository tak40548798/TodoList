import { createStore } from "redux";
import { Provider } from "react-redux";

import { TodoHeader } from "./components/TodoHeader";
import { TodoList } from "./components/TodoList";
import { TodoItem, TodoItemMemo } from "./components/TodoItem";

import reducer from "./reducers/TodoReducers";

const TodoAppStore = createStore(reducer);

function TodoApp() {
  return (
    <Provider store={TodoAppStore}>
      <div className="todo-app">
        <h2>To Do List</h2>
        <TodoHeader />
        <TodoList TodoItem={TodoItemMemo} />
      </div>
    </Provider>
  );
}

export default TodoApp;
