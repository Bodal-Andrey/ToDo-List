import React from 'react';
import { connect } from 'react-redux';
import ToDoInput from '../../components/todo-input';
import ToDoList from '../../components/todo-list';
import Footer from '../../components/footer';
import { addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';

class ToDo extends React.Component {
    state = {
        taskText: '',
    }

    handleInputChange = ({ target: { value } }) => {
        this.setState({
            taskText: value,
        });
    }

    addTask = ({ key }) => {
        const { taskText } = this.state;

        if (taskText.length > 3 && key === 'Enter') {
            const { addTask } = this.props;
            addTask((new Date()).getTime(), taskText, false);
            this.setState({
                taskText: '',
            });
        }
    }

    filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'completed':
                return tasks.filter(task => task.isCompleted);
            case 'active':
                return tasks.filter(task => !task.isCompleted);
            default:
                return tasks;
        }
    }

    getActiveTasksCounter = (tasks) => {
        return tasks.filter(task => !task.isCompleted).length;
    }

    render() {
        const { taskText } = this.state;
        const { tasks, filter, removeTask, completeTask, changeFilter } = this.props;
        const isTasksExist = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks, filter);
        const activeTasksCount = this.getActiveTasksCounter(tasks);

        return (
            <div className="todo-wrapper">
                <ToDoInput
                    onKeyPress={this.addTask}
                    onChange={this.handleInputChange}
                    value={taskText}
                />
                {isTasksExist && <ToDoList
                    tasksList={filteredTasks}
                    removeTask={removeTask}
                    completeTask={completeTask}
                />}
                {isTasksExist && <Footer
                    amount={activeTasksCount}
                    activeFilter={filter}
                    changeFilter={changeFilter}
                />}
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
    filter: state.filter,
});

export default connect(mapStateToProps, { addTask, removeTask, completeTask, changeFilter })(ToDo);
