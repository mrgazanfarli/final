import React from 'react';
import { connect } from 'react-redux';

import { setTodoStatus } from '../actions';

class TodoList extends React.Component {

    handleCheckboxChange = (event, id) => {
        console.log(event.target.checked);
        this.props.setTodoStatus(id, event.target.checked);
    }

    render() {
        return (
            <div>
                {this.props.todos.map(todo => {
                    if (todo.completed === false) {
                        return (
                            <div key={todo.id} className="d-flex align-items-center">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={e => this.handleCheckboxChange(e, todo.id)} />
                                <h5 className="mb-0 text-primary ml-3">{todo.title}</h5>
                            </div>
                        )
                    }
                })}
                {this.props.todos.some(todo => todo.completed === true) ? <h4 className="text=primary mb-3">Done</h4>:null}
                {this.props.todos.map(todo => {
                    if (todo.completed === true) {
                        return (
                            <div key={todo.id} className="d-flex">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={e => this.handleCheckboxChange(e, todo.id)} />
                                <h5>{todo.title}</h5>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { setTodoStatus })(TodoList);