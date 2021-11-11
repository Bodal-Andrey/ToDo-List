import React from 'react';
import ToDoInput from '../../components/todo-input';
import ToDoList from '../../components/todo-list';
import Footer from '../../components/footer';
import { TASKS } from '../../const';

class ToDo extends React.Component {
    state = {
        activeFilter: 'all',
        taskText: '',
    }

    handleInputChange = ({target: {value}}) => {}

    render() {
        const activeFilter = this.state;
        const tasksList = TASKS;
        const isTasksExist = tasksList && tasksList.length > 0;

        return (
            <div className="todo-wrapper">
                <ToDoInput />
                {isTasksExist && <ToDoList tasksList={tasksList} />}
                {isTasksExist && <Footer amount={tasksList.length} activeFilter={activeFilter} />}
            </div>
        );
    };
};

export default ToDo;
