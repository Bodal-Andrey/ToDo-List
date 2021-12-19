import React from 'react';

interface Props {
    id: number,
    text: string,
    isCompleted: boolean,
    removeTask: (id: number) => void,
    completeTask: (id: number) => void,
};

const ToDoItem = ({id, text, isCompleted, removeTask, completeTask }: Props) => {
    return (
        <li onClick={() => completeTask(id)} className="todo-item">
            <i className={isCompleted ? 'mark fa fa-check-circle-o' : 'mark fa fa-circle-thin'} />
            <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
            <i onClick={() => removeTask(id)} className="fa fa-times" />
        </li>
    );
}; 

ToDoItem.defaultProps = {
    id: 0,
    text: '',
    isCompleted: false,
    removeTask: () => { },
    completeTask: () => { },
};

export default ToDoItem;
