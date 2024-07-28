export const appContainer: HTMLElement = document.body;
import Router from "./main/nav/rout";
import DataHandler from "./main/dataHandler/data-handler";
import HeaderView from "./header/header-view";
import MainView from "./main/main-view";
import ListNotesView from "./main/note/list-notes-view";

export default class App {
    listNotes = new ListNotesView();
    header = new HeaderView();
    main = new MainView();
    routing = new Router((hash: string) =>
        this.listNotes.renderCurrentPage(hash)
    );

    constructor() {
        DataHandler.initialize();
        this.routing.updateTitle("home-page");
        this.listNotes.renderCurrentPage(this.routing.getCurrentHash());
        this.insertTemplate();
    }

    insertTemplate() {
        appContainer.append(
            this.header.getComponent(),
            this.main.getComponent(),
            this.listNotes.getComponent()
        );
    }
}
