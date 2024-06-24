import HeaderView from "./header/header-view";

export default class App {
    constructor() {}

    insertTemplate() {
        const header = new HeaderView();
        document.body.append(header.getComponent());
    }
}
