export const addItem = (text) => {
  return {
    type: "ADD_ITEM",
    text: text,
  };
};

export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    id: id,
  };
};

export const updateItem = (id, key, value) => {
  return {
    type: "UPDATE_ITEM",
    id: id,
    key: key,
    value: value,
  };
};