import { TASKS, ADD_TASK } from '../const';

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
        default:
            return state;
    }
};

export default tasks;
