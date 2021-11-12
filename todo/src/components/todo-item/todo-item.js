import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({id, text, isCompleted, removeTask, completeTask }) => {
    return (
        <li onClick={() => completeTask(id)} className="todo-item">
            <i className={isCompleted ? 'mark fa fa-check-circle-o' : 'mark fa fa-circle-thin'} />
            <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
            <i onClick={() => removeTask(id)} className="fa fa-times" />
        </li>
    );
}; 

ToDoItem.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    removeTask: PropTypes.func,
    completeTask: PropTypes.func,
};

ToDoItem.defaultProps = {
    id: 0,
    text: '',
    isCompleted: false,
    removeTask: () => { },
    completeTask: () => { },
};

export default ToDoItem;
