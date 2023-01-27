import React, {useState} from "react";
import './App.css';
import Input from "./components/Input";
import TodoList from "./components/TodoList";


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

      < Input todo={todo} setTodo={setTodo} addTodo={addTodo}/>

      <TodoList list={todos} remove={deleteTodo} />


    </div>
  );
}

export default App;
