import { observable, action, makeObservable } from "mobx";

class CounterStore {
    // 변경한 상태 적용하기 위한것
    constructor() {
        makeObservable(this);
    }

    @observable
    //private data
    _count = 5;

    get count() {
        return this._count;
    }

    //state 메소드는 action으로 해주어야함.
    @action
    increment() {
        this._count++;
    }

    @action
    decrement() {
        this._count--;
    }
}

// 생성해서 export
export default new CounterStore();
