import React, { Component } from 'react';

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.taskInput = React.createRef();
    }

    render() {
        const { handleSubmit, handleChange, input, addBtnDisabled } = this.props;
        addBtnDisabled && this.taskInput.current.focus();

        return (
            <form className="ToDoForm" onSubmit={handleSubmit}>

                <input
                    ref={this.taskInput}
                    className="user-input"
                    onChange={handleChange}
                    type="text"
                    name="todo"
                    value={input}
                    placeholder="What's happening?"
                    required
                    aria-required="true"
                />

                <button
                    className="btn add-btn"
                    type="submit"
                    disabled={addBtnDisabled}
                    aria-disabled={addBtnDisabled}
                >
                    Add Item
                </button>
                
            </form>
        );
    }
};

export default ToDoForm;
