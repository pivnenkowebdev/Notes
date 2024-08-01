export const appContainer: HTMLElement = document.body;
import Router from "./utilities/rout";
import HeaderView from "./header/header-view";
import ControlElementsView from "./main/controls/control-elements-view";
import ListNotesController from "./main/list-notes/list-notes-controller";
import ListNotesView from "./main/list-notes/list-notes-view";

export default class App {
    header = new HeaderView();
    controllElements = new ControlElementsView();
    listNotesController = new ListNotesController();
    listNotesView = new ListNotesView();
    routing = new Router((hash: string) =>
        this.listNotesController.setCurrentPage(hash)
    );

    constructor() {
        this.insertTemplate();
        this.routing.onHashChange(this.routing.initialPage);
    }

    insertTemplate() {
        appContainer.append(
            this.header.getComponent(),
            this.controllElements.getComponent(),
            this.listNotesView.getComponent()
        );
    }
}
