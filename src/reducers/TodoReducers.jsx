const initialState = {
  todoItems: [
    {
      id: Date.now(),
      text: "跑步10分鐘",
      completed: false, // 是否完成任務
      edited: true, // 是否編輯完畢
    },
  ],
  editing: {
    counter: 0,
    max: 2,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      // 加一個新的元素在最前面
      return {
        ...state,
        todoItems: [
          {
            id: Date.now(),
            text: action.text,
            completed: false,
            edited: true,
          },
          ...state.todoItems,
        ],
      };
    }
    case "DELETE_ITEM": {
      // 根據 id 過濾不需要的元素
      let deleteList = state.todoItems.filter((item) => item.id !== action.id);
      return {
        ...state,
        todoItems: deleteList,
        editing: {
          ...state.editing,
          counter: deleteList.filter((item) => !item["edited"]).map((item) => item.id).length,
        },
      };
    }
    case "UPDATE_ITEM": {
      // 根據 id 查找要變更的元素
      // 根據 key 和 value 改變數值
      let updateList = state.todoItems.map((item) => {
        if (item.id === action.id) {
          item[action.key] = action.value;
        }
        return item;
      });
      return {
        ...state,
        todoItems: updateList,
        editing: {
          ...state.editing,
          counter: updateList.filter((item) => !item["edited"]).map((item) => item.id).length,
        },
      };
    }
    default:
      return state;
  }
}

export default reducer;
