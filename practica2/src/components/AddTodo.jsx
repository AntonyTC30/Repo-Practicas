import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!text.trim()) {
      setError('Por favor ingresa una tarea');
      return;
    }
    
    if (text.length > 100) {
      setError('La tarea no puede tener más de 100 caracteres');
      return;
    }

    setError('');
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ingresa una nueva tarea"
          className={error ? 'error' : ''}
        />
        {error && <span className="error-message">{error}</span>}
      </div>
      <button type="submit" className="add-button">
        Agregar Tarea
      </button>
    </form>
  );
};

export default AddTodo;
