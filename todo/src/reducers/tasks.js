import { TASKS, ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../const';

const tasks = (state = TASKS, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    isCompleted: action.isCompleted,
                }
            ];
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== action.id);
        case COMPLETE_TASK:
            return [...state].map(task => {
                if (task.id === action.id) {
                    task.isCompleted = !task.isCompleted;
                }
                return task;
            });
        default:
            return state;
    }
};

export default tasks;
