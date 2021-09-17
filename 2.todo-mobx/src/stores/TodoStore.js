import { observable, action, computed } from "mobx";
class TodoStore {
    @observable
    _todo = {
        title: "test",
    }; // id, title, date

    get todo() {
        return this._todo;
    }
}

// 객체 생성 후 export
export default new TodoStore();
