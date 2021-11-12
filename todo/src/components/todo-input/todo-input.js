import React from 'react';
import PropTypes from 'prop-types';

const ToDoInput = ({ onChange, value, onKeyPress }) => (
    <div className="todo-input-wrapper">
        <i className="fas fa-plus" />
        <input
            className="todo-input"
            placeholder="Click to add task"
            onChange={onChange}
            value={value}
            onKeyPress={onKeyPress}
        />
    </div>
);

ToDoInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    onKeyPress: PropTypes.func,
};

ToDoInput.defaultProps = {
    onChange: () => { },
    value: '',
    onKeyPress: () => {},
};

export default ToDoInput;
