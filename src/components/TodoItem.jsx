import { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);

  const handleSaveEdit = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditText(todo.text);
    }
  };

  if (isEditing) {
    return (
      <div className="task-card">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSaveEdit}
          autoFocus
        />
      </div>
    );
  }

  return (
    <div className="task-card">
      <div className="task-header">
        <div className="task-row">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span
            className={`task-title ${todo.completed ? 'completed' : ''}`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
        </div>
        <div className="task-actions">
          <button
            className="btn"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteTodo(todo.id)}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};
