export const appContainer: HTMLElement = document.body;
import Router from "./utilities/rout";
import DataHandler from "./utilities/data-handler";
import HeaderView from "./header/header-view";
import ControlElementsView from "./main/controls/control-elements-view";
import ListNotesView from "./main/list-notes/list-notes-view";

export default class App {
    header = new HeaderView();
    main = new ControlElementsView();
    listNotes = new ListNotesView();
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
