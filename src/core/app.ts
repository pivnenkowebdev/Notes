import HeaderView from "./header/header-view";
import Main from "./main/main-view";
import Router from "./main/nav/rout";
export const appContainer: HTMLElement = document.body;

export default class App {
    main = new Main();
    header = new HeaderView();
    routing = new Router((hash: string) => this.main.renderCurrentPage(hash));

    constructor() {
        this.main.renderCurrentPage(this.routing.getCurrentHash());
        this.insertTemplate();
    }

    insertTemplate() {
        appContainer.append(
            this.header.getComponent(),
            this.main.getComponent()
        );
    }
}
