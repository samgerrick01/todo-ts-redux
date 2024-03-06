import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../interface";

interface TodosState {
  todos: ITodo[];
}

// Define the initial state using that type
const initialState: TodosState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, actions: PayloadAction<{ todo: ITodo }>) => {
      state.todos.push(actions.payload.todo);
    },
    updateTodo: (state, actions: PayloadAction<{ todos: ITodo[] }>) => {
      state.todos = actions.payload.todos;
    },
    deleteTodo: (state, actions: PayloadAction<{ id: number }>) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== actions.payload.id
      );
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
