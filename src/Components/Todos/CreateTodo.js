import React, { Component } from 'react';
import TodoLabel from './TodoLabel';
import TodoInput from './TodoInput';
import CreateTodoBtn from './CreateTodoBtn';
class CreateTodo extends Component {
    constructor() {
        super();
        this.state = {
            items: { item: '', isDone: false }

        }
    }
    createTodo() {
        if (this.state.items.item) {
            this.props.createTodo && this.props.createTodo(this.state.items);
            this.setState({
                items: { item: '' }
            })
        }
    }
    updateInputText(event) {
        this.setState({
            items: { item: event.target.value, isDone: false }
        })
    }
    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                this.createTodo();
            }}>
                <div className="form_item pd-20">
                    <TodoLabel lblName={this.props.data.name}/>
                    <TodoInput inputText={this.state.items.item}
                        updateInputText={(event) => this.updateInputText(event)} />
                    <CreateTodoBtn createTodo={() => this.createTodo} />
                </div>
            </form>
        );
    }
}
export default CreateTodo;