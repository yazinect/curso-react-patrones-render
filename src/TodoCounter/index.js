import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {

  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter__text--disabled"}`}>Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };
