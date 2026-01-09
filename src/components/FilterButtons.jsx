import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

export const FilterButtons = () => {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <div className="filter-buttons">
      <button
        onClick={() => setFilter('all')}
        className={filter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => setFilter('active')}
        className={filter === 'active' ? 'active' : ''}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={filter === 'completed' ? 'active' : ''}
      >
        Completed
      </button>
    </div>
  );
};
