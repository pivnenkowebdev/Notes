export const appContainer: HTMLElement = document.body;
import Router from "./utilities/rout";
import HeaderView from "./header/header-view";
import ControlElementsView from "./main/controls/control-elements-view";
import ListNotesController from "./main/list-notes/list-notes-controller";

export default class App {
    header = new HeaderView();
    controllElements = new ControlElementsView();
    listNotesController = new ListNotesController();
    routing = new Router((hash: string) =>
        this.listNotesController.setCurrentPage(hash)
    );

    constructor() {
        this.insertTemplate();
        this.routing.onHashChange(this.routing.initialPage);
        this.listNotesController.setListener();
    }

    insertTemplate() {
        appContainer.append(
            this.header.getComponent(),
            this.controllElements.getComponent(),
            this.listNotesController.listNotesView.getComponent()
        );
    }
}
