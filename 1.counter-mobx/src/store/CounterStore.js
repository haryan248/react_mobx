import { observable } from "mobx";

class CounterStore {
    @observable
    _count = 5;
}

// 생성해서 export
export default new CounterStore();
