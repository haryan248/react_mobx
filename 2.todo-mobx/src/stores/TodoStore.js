import { observable, action, computed, makeObservable } from "mobx";
class TodoStore {
    constructor() {
        makeObservable(this);
    }
    @observable
    _todo = {
        title: "test",
    }; // id, title, date

    get todo() {
        return this._todo;
    }
    @action
    setTodoProps(name, value) {
        this._todo = {
            ...this._todo,
            [name]: value,
        };
    }
}

// 객체 생성 후 export
export default new TodoStore();
