import React from 'react';
import PropTypes from 'prop-types';

const ToDoInput = ({ onChange }) => (
    <div className="todo-input-wrapper">
        <i className="fas fa-plus" />
        <input
            className="todo-input"
            placeholder="Click to add task"
            onChange={onChange}
        />
    </div>
);

ToDoInput.propTypes = {
    onChange: PropTypes.func,
};

ToDoInput.defaultProps = {
    onChange: () => {},
};

export default ToDoInput;
