import { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodoInput = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label htmlFor="todo-input">What needs to be done?</label>
      <input
        id="todo-input"
        type="text"
        placeholder="Add a new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="form-row">
        <button type="submit" className="btn">Add Todo</button>
      </div>
    </form>
  );
};
