import { useContext, useMemo } from 'react';
import { TodoContext } from '../context/TodoContext';
import { FilterContext } from '../context/FilterContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const { todos } = useContext(TodoContext);
  const { filter } = useContext(FilterContext);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <div className="todo-list-container">
      {filteredTodos.length === 0 ? (
        <p className="no-tasks">No todos yet! Add one above.</p>
      ) : (
        <div className="todo-list">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
};
