import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../const';
import { load } from 'redux-localstorage-simple';
import { ITask, TaskActionTypes } from '../types';

type stateTasks = ITask[];

let TASKS: any = load({ namespace: 'todo-list' });

const initialState: stateTasks = (TASKS && TASKS.tasks) ? TASKS.tasks : [];

const tasks = (state = initialState, action: TaskActionTypes): stateTasks => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state, {
                    id: action.payload.id,
                    text: action.payload.text,
                    isCompleted: action.payload.isCompleted,
                }
            ];
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== action.payload.id);
        case COMPLETE_TASK:
            return [...state].map(task => {
                if (task.id === action.payload.id) {
                    task.isCompleted = !task.isCompleted;
                }
                return task;
            });
        default:
            return state;
    }
};

export default tasks;