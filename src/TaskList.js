// TaskList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTaskWithSocket, completeTaskWithSocket } from './actions';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = (text) => {
    dispatch(addTaskWithSocket(text));
  };

  const handleCompleteTask = (id) => {
    dispatch(completeTaskWithSocket(id));
  };

  return (
    <div>
      <h2>Liste des tâches</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            {!task.completed && (
              <button onClick={() => handleCompleteTask(task.id)}>
                Marquer comme terminé
              </button>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Nouvelle tâche"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value.trim() !== '') {
              handleAddTask(e.target.value.trim());
              e.target.value = '';
            }
          }}
        />
      </div>
    </div>
  );
};

export default TaskList;
