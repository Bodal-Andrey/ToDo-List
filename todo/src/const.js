const TASKS = [
    {
        id: 1,
        text: 'Learn ReactJS',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Learn Redux',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Learn React Router',
        isCompleted: false,
    },
];

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed',
    },
];

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const CHANGE_FILTER = 'CHANGE_FILTER';

export {
    TASKS,
    FILTERS_BTN,
    ADD_TASK,
    REMOVE_TASK,
    COMPLETE_TASK,
    CHANGE_FILTER,
};
