const defaultState = {
  todos: [
    {
      name: "купить хлеб",
      id: 1,
    },
    {
      name: "купить воду",
      id: 2,
    },
    {
      name: "купить соль",
      id: 3,
    },

  ],
};

const ADD_TODO = "ADD_TODOS";
const REMOVE_LAST_TODO = "REMOVE_LAST_TODO";

export const todosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_LAST_TODO:
      return {
        ...state,
        todos: [...state.todos.slice(0, state.todos.length - 1)],
      };

    default:
      return state;
  }
};

export const addTodoAction = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const removeLastTodoAction = (payload) => ({
  type: REMOVE_LAST_TODO,
  payload,
});
