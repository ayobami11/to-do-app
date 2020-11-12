import React from 'react';

const ToDoHeader = ({ todos }) => {
    return (
        <header className="ToDoHeader">
            <h1 className="main-header">To Do List</h1>
            <p
                className={`header-intro ${
                    todos.length ? 'tasks-left' : 'no-tasks'
                }`}
            >
                You have {todos.length || 'no'}{' '}
                {todos.length === 1 ? 'task' : 'tasks'} left.
            </p>
        </header>
    );
};

export default ToDoHeader;
