import { createStore } from "redux";
const initialState = {
  name: "",
  category: "",
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload };
    case UPDATE_CATEGORY:
      return { ...state, category: payload };
    default:
      return state;
  }
}

export default createStore(reducer);
