const defaulCount = { count: 0 };

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const countReducer = (state = defaulCount, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };

    case DECREMENT:
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};
