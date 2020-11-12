import React, { Component } from 'react';

import './index.css';

import ToDoHeader from './components/ToDoHeader';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

class App extends Component {
    state = {
        addBtnDisabled: false,
        input: '',
        key: 0,
        todos: []
    };

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({
            input: value
        });
    };

    /**
     * Adds the user's submission to the todos array in state.
     * 
     * @param {object} event The event object
     */
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState((state) => ({
            input: '',
            key: state.key + 1,
            todos: [
                ...state.todos,
                {
                    id: state.key,
                    task: state.input,
                    completed: false,
                    editing: false
                }
            ]
        }));
    };

    /**
     * Toggles the value of the checked property for the current task.
     * 
     * @param {number} taskId The id of the current task
     */
    toggleCompleted = (taskId) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === taskId) {
                    todo.completed = !todo.completed;
                    todo.editing = !todo.editing;
                }

                return todo;
            })
        });
    };

    /**
     * Edits the value of the current task's "task" property
     * 
     * @param {number} taskId The id of the current task
     */
    editTask = (taskId) => {
        const taskToEdit = this.state.todos.find((task) => task.id === taskId);
        taskToEdit.editing = !taskToEdit.editing;

        if (taskToEdit.editing) {
            this.setState({
                addBtnDisabled: true,
                input: taskToEdit.task
            });
        } else if (this.state.input) {
            taskToEdit.task = this.state.input;
            this.setState({
                addBtnDisabled: false,
                input: ''
            });
        }

        const modifiedArray = [
            ...this.state.todos.slice(0, this.state.todos.indexOf(taskToEdit)),
            taskToEdit,
            ...this.state.todos.slice(
                this.state.todos.indexOf(taskToEdit) + 1,
                this.state.todos.length
            )
        ];

        this.setState({
            todos: modifiedArray
        });
    };

    /**
     * Filters out the current element whose id matches the input "taskId"
     * 
     * @param {number} taskId The id of the current task 
     */
    deleteTask = (taskId) => {
        const modifiedArray = this.state.todos.filter(
            (task) => task.id !== taskId
        );
        this.setState({
            todos: modifiedArray,
            addBtnDisabled: false
        });
    };

    /**
     * Sets the value of the todos property in state to an empty array
     */
    clearTasks = () => {
        this.setState({
            todos: [],
            key: 0
        });
    };

    render() {
        return (
            <section className="App">
                <ToDoHeader todos={this.state.todos} />

                <ToDoForm
                    input={this.state.input}
                    addBtnDisabled={this.state.addBtnDisabled}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />

                <ToDoList
                    todos={this.state.todos}
                    toggleCompleted={this.toggleCompleted}
                    editTask={this.editTask}
                    deleteTask={this.deleteTask}
                    clearTasks={this.clearTasks}
                />
                
            </section>
        );
    }
}

export default App;
