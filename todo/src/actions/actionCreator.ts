import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER } from '../const';
import {TaskActionTypes, FilterActionType, Filter, ITask} from '../types';

const addTask = (task: ITask): TaskActionTypes => ({
    type: ADD_TASK,
    payload: {
        ...task
    },
});

const removeTask = (id: number): TaskActionTypes => ({
    type: REMOVE_TASK,
    payload: {
        id
    }
});

const completeTask = (id: number): TaskActionTypes => ({
    type: COMPLETE_TASK,
    payload: {
        id
    }
});

const changeFilter = (activeFilter: Filter): FilterActionType => ({
    type: CHANGE_FILTER,
    payload: {
        activeFilter
    }
});

export {
    addTask,
    removeTask,
    completeTask,
    changeFilter,
};
