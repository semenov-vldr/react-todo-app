import React from 'react';

const Input = ({todo, setTodo, addTodo}) => {


    return (
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
    );
};

export default Input;