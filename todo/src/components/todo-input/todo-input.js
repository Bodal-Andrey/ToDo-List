import React from 'react';
import PropTypes from 'prop-types';

const ToDoInput = ({ onChange, value }) => (
    <div className="todo-input-wrapper">
        <i className="fas fa-plus" />
        <input
            className="todo-input"
            placeholder="Click to add task"
            onChange={onChange}
            value={value}
        />
    </div>
);

ToDoInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
};

ToDoInput.defaultProps = {
    onChange: () => { },
    value: '',
};

export default ToDoInput;
