import React, {useState} from "react";
import './App.css';
import Input from "./components/Input";
import TodoList from "./components/TodoList";


function App() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  // функции, которые прокидываешь в другие компоненты в качестве пропсов привыкай сразу оборачивать в useCallback. На твоем приложении это не факт что отразиться
  // но можешь улететь в череду ререндеров из за такой передачи пропса, т.к в качестве пропса всегда будет новый инстенс функции (особенность  js т.к функция - это объект)
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
/**
* плохая практика передавать в другие компоненты напрямую реактовские функции по работе со стейтом. 
* Мути обертку над ней и уже внутри нее вызывай стейт с этим значением
**?
      < Input todo={todo} setTodo={setTodo} addTodo={addTodo}/>

      <TodoList list={todos} remove={deleteTodo} />


    </div>
  );
}

export default App;
