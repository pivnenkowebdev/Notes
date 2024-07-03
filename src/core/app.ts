import HeaderView from "./header/header-view";

export default class App {
    appContainer: HTMLElement = document.body;
    constructor() {}

    insertTemplate() {
        const header = new HeaderView();
        this.appContainer.append(header.getComponent());
    }
}
