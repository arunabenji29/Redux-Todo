import React from 'react'
import { connect } from 'react-redux'
import { populateTodo, toggleTodo, deleteTodo } from '../actions'

class Todo extends React.Component {

    constructor() {
        super()
        this.state = {
            // todo:{
            newValue: '',

            // }
        }
    }

    handleTodo = (event) => {
        this.setState({
            // todo:{
            newValue: event.target.value
            // }
        })
    }

    addTodo = (event) => {
        event.preventDefault();
        this.props.populateTodo(this.state.newValue)
        this.setState({
            newValue: ''
        })
    }

    toggleComplete = (event, todo) => {
        event.preventDefault();

        this.props.toggleTodo(todo.id)

    }

    updatedButton = (completed) => {
        if (completed) {
            return 'completed'
        }
        return 'complete'

    }

    deleteTodo = (event,id) => {
        event.preventDefault();
        this.props.deleteTodo(id)
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.todosFromRedux &&
                        this.props.todosFromRedux.map(todo => (
                            <div>
                                <h4
                                    className={this.updatedButton(todo.completed)}>{todo.value}
                                    <button
                                        onClick=
                                        {(event) => this.toggleComplete(event, todo)}
                                    >{this.updatedButton(todo.completed)}</button>
                                    <button
                                        onClick=
                                        {(event) => this.deleteTodo(event, todo.id)}
                                    >X</button>
                                </h4>


                            </div>

                        ))}
                </div>
                <form>
                    <input
                        placeholder="enter your todo's here"
                        value={this.state.newValue}
                        onChange={this.handleTodo}
                    />
                    <button onClick={this.addTodo}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        todosFromRedux: state.todos
    };
};

export default connect(
    mapStateToProps,
    { populateTodo, toggleTodo, deleteTodo })
    (Todo);