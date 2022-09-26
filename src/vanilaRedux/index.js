import { createStore, combineReducers, applyMiddleware } from "redux";
import { countReducer } from "./countReducer";
import { todosReducer } from "./todosReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  count: countReducer,
  todos: todosReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
