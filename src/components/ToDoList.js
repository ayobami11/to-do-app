import React from 'react';

import ToDoItem from './ToDoItem';

const ToDoList = ({
    todos,
    toggleCompleted,
    editTask,
    deleteTask,
    clearTasks
}) => {
    const todosList = todos.map((todo) => (
        <ToDoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            editTask={editTask}
            deleteTask={deleteTask}
        />
    ));

    return (
        <React.Fragment>
            
            <ul className="ToDoList">{todosList}</ul>

            <button className="btn clear-btn" onClick={clearTasks}>
                Clear List
            </button>

        </React.Fragment>
    );
};

export default ToDoList;
