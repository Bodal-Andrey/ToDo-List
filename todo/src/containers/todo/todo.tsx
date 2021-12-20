import React from 'react';
import { connect } from 'react-redux';
import ToDoInput from '../../components/todo-input';
import ToDoList from '../../components/todo-list';
import Footer from '../../components/footer';
import { addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';
import { ITask, Filter } from '../../types';

interface Props {
    addTask: (task: ITask) => void;
    tasks: Array<ITask>,
    task: ITask,
    filter: Filter,
    removeTask: (id: number) => void,
    completeTask: (id: number) => void,
    changeFilter: (activeFilter: Filter) => void,
};

class ToDo extends React.Component<Props> {
    state = {
        taskText: '',
    }

    handleInputChange = (event: { target: HTMLInputElement }) => {
        this.setState({
            taskText: event.target.value,
        });
    }

    addTask = ({ key }: any) => {
        const { taskText } = this.state;

        if (taskText.length > 3 && key === 'Enter') {
            const { addTask } = this.props;

            const task = {
                id: (new Date()).getTime(),
                text: taskText,
                isCompleted: false,
            };

            addTask(task);

            this.setState({
                taskText: '',
            });
        }
    }

    filterTasks = (tasks: Array<ITask>, activeFilter: Filter) => {
        switch (activeFilter) {
            case 'completed':
                return tasks.filter((task) => task.isCompleted);
            case 'active':
                return tasks.filter((task) => !task.isCompleted);
            default:
                return tasks;
        }
    }

    getActiveTasksCounter = (tasks: Array<ITask>) => {
        return tasks.filter((task) => !task.isCompleted).length;
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

const mapStateToProps = (state: { tasks: Array<ITask>; filter: Filter; }) => ({
    tasks: state.tasks,
    filter: state.filter,
});

export default connect(mapStateToProps, { addTask, removeTask, completeTask, changeFilter })(ToDo);
