import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers';

export const store = configureStore({
  reducer: {
    todos: todoReducer, // Asegúrate de que el reducer existe
  },
});