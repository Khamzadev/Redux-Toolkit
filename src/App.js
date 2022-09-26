import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAction,
  removeLastTodoAction,
} from "./vanilaRedux/todosReducer";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);
  const todos = useSelector((state) => state.todos.todos);

  const increment = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
  };

  const addTodo = (todo) => {
    const todos = {
      name: todo,
      id: Date.now().toString(),
    };
    dispatch(addTodoAction(todos));
  };

  const removeLastTodo = () => {
    dispatch({ type: "REMOVE_LAST_TODO", payload: 1 });
  };

  return (
    <div className="App">
      <h1>Счетчик : {count}</h1>
      <button onClick={() => increment()}>INCREMENT</button>
      <button onClick={() => decrement()}>DECREMENT</button>
      <button onClick={() => addTodo(prompt())}>Добавить туду</button>
      <button onClick={() => removeLastTodo()}>Удалить туду</button>
      <div>
        {todos.map((todo) => (
          <p>{todo.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
