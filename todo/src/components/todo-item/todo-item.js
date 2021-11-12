import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ text, isCompleted, removeTask, id }) => {
    return (
        <li className="todo-item">
            <i className={isCompleted ? 'mark far fa-check circle' : 'mark far fa-circle'} />
            <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
            <i onClick={() => removeTask(id)} className="fas fa-times" />
        </li>
    );
}; 

ToDoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    removeTask: PropTypes.func,
    id: PropTypes.number,
};

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
    removeTask: () => { },
    id: 0,
};

export default ToDoItem;
