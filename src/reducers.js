// reducers.js
const initialState = {
    tasks: []
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TASKS_SUCCESS':
        return {
          ...state,
          tasks: action.payload.tasks
        };
      case 'ADD_TASK_SUCCESS':
        return {
          ...state,
          tasks: [...state.tasks, action.payload.task]
        };
      case 'COMPLETE_TASK_SUCCESS':
        const updatedTasks = state.tasks.map(task =>
          task.id === action.payload.task.id ? action.payload.task : task
        );
        return {
          ...state,
          tasks: updatedTasks
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  