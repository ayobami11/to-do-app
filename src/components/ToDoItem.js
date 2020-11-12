import React from 'react';

const ToDoItem = ({ todo, toggleCompleted, editTask, deleteTask }) => {
    return (
        <li className="ToDoItem">

            <div>
                <label
                    className={`task-label ${
                        todo.completed && 'task-completed'
                    }`}
                >
                    <input
                        className="task-input"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleCompleted(todo.id)}
                    />
                    {todo.task}
                </label>
            </div>

            <div className="task-btns">
                <button
                    className="btn edit-btn"
                    onClick={() => editTask(todo.id)}
                    disabled={todo.completed}
                    aria-disabled={todo.completed}
                >
                    {todo.editing ? 'Done' : 'Edit'}
                </button>
                <button
                    className="btn delete-btn"
                    onClick={() => deleteTask(todo.id)}
                >
                    Delete
                </button>
            </div>
            
        </li>
    );
};

export default ToDoItem;
