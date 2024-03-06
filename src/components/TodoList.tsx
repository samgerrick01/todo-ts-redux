import { ITodo } from "../interface";
import { FaArrowCircleRight } from "react-icons/fa";

interface ITodoListProps {
  todos: ITodo[];
  handleEditTodo: (value: ITodo) => void;
  handleDeleteTodo: (id: number) => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  handleEditTodo,
  handleDeleteTodo,
  setIsEditing,
}) => {
  return (
    <div className="todolist-container">
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div style={{ display: "flex", gap: "10px" }}>
            <FaArrowCircleRight />
            <label>{todo.text}</label>
          </div>
          <div className="todo-buttons">
            <button
              onClick={() => {
                handleEditTodo(todo);
                setIsEditing(true);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDeleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
