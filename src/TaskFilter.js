// TaskFilter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSearchText } from './actions';

const TaskFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const searchText = useSelector((state) => state.searchText);

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  const handleSearchTextChange = (newSearchText) => {
    dispatch(setSearchText(newSearchText));
  };

  return (
    <div>
      <h2>Filtrer les tâches</h2>
      <div>
        <label>
          Statut :
          <select value={filter} onChange={(e) => handleFilterChange(e.target.value)}>
            <option value="ALL">Toutes</option>
            <option value="COMPLETED">Terminées</option>
            <option value="UNCOMPLETED">Non terminées</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Rechercher :
          <input
            type="text"
            value={searchText}
            onChange={(e) => handleSearchTextChange(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default TaskFilter;
