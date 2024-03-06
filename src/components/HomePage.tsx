import { useState } from "react";
import { ITodo } from "../interface";
import TodoList from "./TodoList";
import { useAppDispatch, useAppSelector } from "../app/store";
import { addTodo, updateTodo, deleteTodo } from "../app/features/todoSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todos);

  const [input, setInput] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editId, setEditId] = useState<any>(null);

  const handleAddTodo = (): void => {
    if (!input) {
      alert("Please enter a task");
    } else {
      if (isEditing) {
        const newTodos = todos.map((todo) => {
          if (todo.id === editId) {
            return { ...todo, text: input };
          }
          return todo;
        });
        dispatch(updateTodo({ todos: newTodos }));
        setInput("");
        setIsEditing(false);
        setEditId(null);
      } else {
        const newTodo: ITodo = {
          id: todos.length + 1,
          text: input,
          completed: false,
        };
        dispatch(addTodo({ todo: newTodo }));
        setInput("");
      }
    }
  };

  const handleEditTodo = (value: ITodo): void => {
    setInput(value.text);
    setEditId(value.id);
  };

  const handleDeleteTodo = (id: number): void => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div className="home-container">
      <h1>Todo List</h1>

      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Add a new task"
        />
        <button onClick={handleAddTodo}>{isEditing ? "Update" : "Add"}</button>
      </div>

      <div className="todos-container">
        {todos.length === 0 && <p>No tasks</p>}
        {todos.length > 0 && (
          <TodoList
            todos={todos}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
