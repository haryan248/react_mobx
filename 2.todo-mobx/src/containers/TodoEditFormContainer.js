import React, { Component } from "react";
import TodoEditFormView from "../views/TodoEditFormView";
import { inject, observer } from "mobx-react";
import autobind from "autobind-decorator";

@inject("todoStore")
@autobind
// inject 밑에 놔야함
@observer
class TodoEditFormContainer extends Component {
    onSetTodoProps(name, value) {
        this.props.todoStore.setTodoProps(name, value);
    }
    render() {
        const { todoStore } = this.props;
        return <TodoEditFormView todo={todoStore.todo} onSetTodoProps={this.onSetTodoProps} />;
    }
}

export default TodoEditFormContainer;
