import { TASKS, ADD_TASK, REMOVE_TASK } from '../const';

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
        default:
            return state;
    }
};

export default tasks;
