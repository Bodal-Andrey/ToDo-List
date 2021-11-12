import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from '../todo-item';

const ToDoList = ({ tasksList, removeTask }) => {
    return (
        <ul className="todo-list">
            {tasksList.map((item) => (
                <ToDoItem
                    id={item.id}
                    key={item.id}
                    text={item.text}
                    isCompleted={item.isCompleted}
                    removeTask={removeTask}
                />
            ))}
        </ul>
    );
};

ToDoList.propTypes = {
    tasksList: PropTypes.array,
    removeTask: PropTypes.func,
};

ToDoList.defaultProps = {
    tasksList: [],
    removeTask: () => {},
};

export default ToDoList;