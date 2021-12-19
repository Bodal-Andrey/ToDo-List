import React from 'react';

interface Props {
    onChange: () => void,
    value: string,
    onKeyPress: () => void,
};

const ToDoInput = ({ onChange, value, onKeyPress }: Props) => (
    <div className="todo-input-wrapper">
        <i className="fa fa-plus" />
        <input
            className="todo-input"
            placeholder="Click to add task"
            onChange={onChange}
            value={value}
            onKeyPress={onKeyPress}
        />
    </div>
);

ToDoInput.defaultProps = {
    onChange: () => {},
    value: '',
    onKeyPress: () => {},
};

export default ToDoInput;
