import React from 'react';

const TodoList = ({list, remove}) => {
    return (
        <>
          {
        list?.length > 0 ? (
          <ul className="todo-list">

      {list.map((todo, index) => (
          <div className="todo">
            <li key={index}>{todo}</li>
            <button 
            className="delete-button"
            onClick={() => remove(todo)}
            >Delete</button>
          </div>
        ))}

      </ul>
        ) : (
          <div className="empty">Список дел пуст</div>
        ) 
      }
        </>
    );
};

export default TodoList;