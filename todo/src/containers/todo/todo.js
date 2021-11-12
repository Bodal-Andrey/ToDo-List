import React from 'react';
import { connect } from 'react-redux';
import ToDoInput from '../../components/todo-input';
import ToDoList from '../../components/todo-list';
import Footer from '../../components/footer';
import addTask from '../../actions/actionCreator';

class ToDo extends React.Component {
    state = {
        activeFilter: 'all',
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
            this.state({
                taskText: '',
            });
        }
    }

    render() {
        const { activeFilter, taskText } = this.state;
        const { tasks } = this.props;
        const isTasksExist = tasks && tasks.length > 0;

        return (
            <div className="todo-wrapper">
                <ToDoInput
                    onKeyPress={this.addTask}
                    onChange={this.handleInputChange}
                    value={taskText}
                />
                {isTasksExist && <ToDoList tasksList={tasks} />}
                {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
});

export default connect(mapStateToProps, {addTask})(ToDo);
