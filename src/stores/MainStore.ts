import { observable, action, computed } from "mobx";

export class MainStore {
    @observable
    title: string
}

const self = new MainStore();
export default self;