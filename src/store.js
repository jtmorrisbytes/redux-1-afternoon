import { createStore } from "redux";
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
export const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const CREATE_RECIPE = "CREATE_RECIPE";
const initialState = {
  name: "",
  category: "",
  ingredients: [],
  authorFirst: "",
  authorLast: "",
  instructions: [],
  recipes: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(type, payload, state);
  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload };
    case UPDATE_CATEGORY:
      return { ...state, category: payload };
    case UPDATE_FIRST_NAME:
      return { ...state, authorFirst: payload };
    case UPDATE_LAST_NAME:
      return { ...state, authorLast: payload };
    case ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, payload] };
    case ADD_INSTRUCTION:
      return { ...state, instructions: [...state.instructions, payload] };
    case CREATE_RECIPE:
      throw new ERROR("FINISH IMPLEMENTING CREATE_RECIPE");
      return {
        ...state,
        recipes: [
          ...state.recipes,
          {
            name: state.name,
            category: state.category,
          },
        ],
      };
    default:
      return state;
  }
}

export default createStore(reducer);
