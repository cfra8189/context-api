import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import { TodoContext } from '../context/TodoContext';

export const FilterButtons = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { todos, clearCompleted } = useContext(TodoContext);
  const hasCompleted = todos.some((t) => t.completed);

  return (
    <div className="filter-wrap">
      <div className="filter-row">
        <button
          onClick={() => setFilter('all')}
          className={`btn ${filter === 'all' ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`btn ${filter === 'active' ? 'active' : ''}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`btn ${filter === 'completed' ? 'active' : ''}`}
        >
          Completed
        </button>
      </div>
      <div className="filter-row" style={{ marginTop: 12 }}>
        <button
          className="btn"
          onClick={clearCompleted}
          disabled={!hasCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};
