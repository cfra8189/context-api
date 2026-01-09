import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { TodoInput } from './components/TodoInput';
import { FilterButtons } from './components/FilterButtons';
import { TodoList } from './components/TodoList';
import './App.css';

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`dark-mode`}>
      <div className="app-container">
        <div className="app-header">
          <h2>Todo App</h2>
        </div>
        <div className="main-area">
          <TodoInput />
          <FilterButtons />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default AppContent
