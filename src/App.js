import React, {useState} from "react";
import './App.css';


function App() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if(todo !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  }

  const deleteTodo = (todo) => {
    const newTodos = todos.filter(item => item !== todo);
    setTodos(newTodos)
  }


  return (
    <div className="App">

      <h1>React Todo App</h1>
      <div className="input-wrapper">
        <input 
          placeholder="enter todo"
          value={todo}
          onChange={(evt) => setTodo(evt.target.value)}
        />
        <button 
        className="add-button"
        onClick={addTodo}
        >Add todo</button>
      </div>

      {
        todos?.length > 0 ? (
          <ul className="todo-list">

      {todos.map(todo => (
          <div className="todo">
            <li>{todo}</li>
            <button 
            className="delete-button"
            onClick={() => deleteTodo(todo)}
            >Delete</button>
          </div>
        ))}

      </ul>
        ) : (
          <div className="empty">Список дел пуст</div>
        ) 
      }


    </div>
  );
}

export default App;
