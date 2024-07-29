export const appContainer: HTMLElement = document.body;
import Router from "./utilities/rout";
import HeaderView from "./header/header-view";
import ControlElementsView from "./main/controls/control-elements-view";
import ListNotesController from "./main/list-notes/list-notes-controller";

export default class App {
    header = new HeaderView();
    main = new ControlElementsView();
    listNotes = new ListNotesController();
    routing = new Router((hash: string) => this.listNotes.setCurrentPage(hash));

    constructor() {
        this.routing.updateTitle("home-page");
        this.insertTemplate();
    }

    insertTemplate() {
        appContainer.append(
            this.header.getComponent(),
            this.main.getComponent(),
            this.listNotes.getRender()
        );
    }
}
