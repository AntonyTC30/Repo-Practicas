import React, { Suspense } from 'react';

// Importación diferida de componentes
const AddTodo = React.lazy(() => import('./components/AddTodo'));
const TodoList = React.lazy(() => import('./components/TodoList'));

function App() {
  return (
    <div className="app"> 
      <h1>To-Do List (Redux)</h1>
      <Suspense fallback={
        <div className="loading-container">
          Cargando componentes...
        </div>
      }>
        <AddTodo />
        <TodoList />
      </Suspense>
    </div>
  );
}

export default App;