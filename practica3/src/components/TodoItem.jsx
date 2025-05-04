import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar esta tarea?');
    if (confirmDelete) {
      dispatch(deleteTodo(todo.id));
    }
  };

  const handleToggle = (e) => {
    e.preventDefault();
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <i
          className={`bi ${todo.completed ? 'bi-check-circle-fill' : 'bi-circle'} icono-check`}
          onClick={handleToggle}
          title={todo.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
        />
        <span className={todo.completed ? 'texto-completado' : ''}>
          {todo.text}
        </span>
      </div>
      <button 
        className="delete-button"
        onClick={handleDelete}
        title="Eliminar tarea"
      >
        <i className="bi bi-trash3-fill" />
        <span className="delete-text">Eliminar</span>
      </button>
    </div>
  );
};

export default TodoItem;