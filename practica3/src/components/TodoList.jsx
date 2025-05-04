import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { loadTodos } from '../redux/actions';

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        // Cargar tareas desde localStorage al montar el componente
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        dispatch(loadTodos(savedTodos));
    }, [dispatch]);

    if (todos.length === 0) {
        return (
            <div className="empty-state">
                <p>No hay tareas pendientes</p>
                <p className="subtext">¡Agrega tu primera tarea!</p>
            </div>
        );
    }

    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;