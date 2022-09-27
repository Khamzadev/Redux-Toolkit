import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  decrement,
  increment,
  removeLastTodo,
} from "./reduxToolkit/toolkitSlice";

const addAsyncTodo = () => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(addTodo(prompt()));
    }, 2000);
  };
};

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.toolkit.count);
  const todos = useSelector((state) => state.toolkit.todos);

  // const increment = () => {
  //   dispatch({ type: "INCREMENT", payload: 1 });
  // };

  // const decrement = () => {
  //   dispatch({ type: "DECREMENT", payload: 1 });
  // };

  // const addTodo = (todo) => {
  //   const todos = {
  //     name: todo,
  //     id: Date.now().toString(),
  //   };
  //   dispatch(addTodoAction(todos));
  // };

  // const removeLastTodo = () => {
  //   dispatch({ type: "REMOVE_LAST_TODO", payload: 1 });
  // };

  return (
    <div className="App">
      <h1>Счетчик : {count}</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>Добавить туду</button>
      <button onClick={() => dispatch(removeLastTodo())}>Удалить туду</button>
      <button onClick={() => dispatch(addAsyncTodo())}>Добавить АСИНК ТУДУ</button>
      <div>
        {todos.map((todo) => (
          <p>{todo}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
