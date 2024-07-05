import HeaderView from "./header/header-view";
import Main from "./main/main-view";
import Router from "./main/nav/rout";

export default class App {
    appContainer: HTMLElement = document.body;
    main = new Main();
    header = new HeaderView();
    routing = new Router((hash: string) => this.main.renderCurrentPage(hash));

    constructor() {
        this.main.renderCurrentPage(this.routing.getCurrentHash());
        this.insertTemplate();
    }

    insertTemplate() {
        this.appContainer.append(
            this.header.getComponent(),
            this.main.getComponent()
        );
    }
}
