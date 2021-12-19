import React from 'react';
import ToDoItem from '../todo-item';
import { ITask } from '../../types';

interface Props {
    tasksList: Array<ITask>,
    removeTask: (id: number) => void,
    completeTask: (id: number) => void,
};

const ToDoList = ({ tasksList, removeTask, completeTask }: Props) => {
    return (
        <ul className="todo-list">
            {tasksList.map((item) => (
                <ToDoItem
                    id={item.id}
                    key={item.id}
                    text={item.text}
                    isCompleted={item.isCompleted}
                    removeTask={removeTask}
                    completeTask={completeTask}
                />
            ))}
        </ul>
    );
};

ToDoList.defaultProps = {
    tasksList: [],
    removeTask: () => {},
    completeTask: () => {},
};

export default ToDoList;