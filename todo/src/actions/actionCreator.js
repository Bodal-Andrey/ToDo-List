import { ADD_TASK, REMOVE_TASK } from '../const';

const addTask = (id, text, isCompleted) => ({
    type: ADD_TASK,
    id,
    text,
    isCompleted,
});

const removeTask = (id) => ({
    type: REMOVE_TASK,
    id,
});

export {
    addTask,
    removeTask,
};
