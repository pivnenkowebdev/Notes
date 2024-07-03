import HeaderView from "./header/header-view";
import Main from "./main/main-view";

export default class App {
    appContainer: HTMLElement = document.body;
    constructor() {}

    insertTemplate() {
        const header = new HeaderView();
        const main = new Main();

        this.appContainer.append(header.getComponent(), main.getComponent());
    }
}
