import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from '../todo-item';

const ToDoList = ({ tasksList, removeTask, completeTask }) => {
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

ToDoList.propTypes = {
    tasksList: PropTypes.array,
    removeTask: PropTypes.func,
    completeTask: PropTypes.func,
};

ToDoList.defaultProps = {
    tasksList: [],
    removeTask: () => { },
    completeTask: () => {},
};

export default ToDoList;