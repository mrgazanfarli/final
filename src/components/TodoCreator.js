import React from 'react';
import { connect } from 'react-redux';

import { setTodoInputValue, addTodo } from '../actions';

class PostCreator extends React.Component {
    handleTodoInputChange = value => {
        this.props.setTodoInputValue(value);
    }

    handleTodoFormSubmit = event => {
        event.preventDefault();
        if (this.props.todoInputValue.trim() !== '') {
            this.props.addTodo({
                id: Math.max(this.props.todos.map(todo => todo.id)) + 1,
                title: this.props.todoInputValue,
                completed: false
            });
            this.props.setTodoInputValue('');
        }
    }

    render() {
        return (
            <form onSubmit={e => this.handleTodoFormSubmit(e)}>
                <div className="d-flex">
                    <input
                        className="form-control"
                        type="text"
                        onChange={e => this.handleTodoInputChange(e.target.value)}
                        value={this.props.todoInputValue}
                        placeholder="What do you want todo?" />
                    <button type="submit" className="btn btn-success ml-3 px-5">Add</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoInputValue: state.todoInputValue,
        todos: state.todos
    }
}

export default connect(mapStateToProps, { setTodoInputValue, addTodo })(PostCreator)