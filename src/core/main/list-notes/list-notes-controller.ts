import ListNotesView from "./list-notes-view";
import DataHandler from "../../utilities/data-handler";
import { checkTrust } from "../../utilities/helper";
import Router from "../../utilities/rout";

export default class ListNotesController {
    listNotesView: ListNotesView;
    private currentHashGlobal: string;
    protected isListener: boolean;

    constructor() {
        this.isListener = false;
        this.listNotesView = new ListNotesView();
        this.currentHashGlobal = Router.getCurrentHash();
    }

    private setListener() {
        const list = document.querySelector("#list");
        if (!this.isListener) {
            list?.addEventListener("click", this.handlerAction.bind(this));
            this.isListener = true;
        }
    }

    private removeNoteItem(removeBtn: Element) {
        const currentRemoveNote = removeBtn.closest("[data-note]");
        checkTrust(currentRemoveNote);
        const idCurrentNote = currentRemoveNote.id;

        DataHandler.choiceListForRemove(idCurrentNote);

        this.currentHashGlobal = Router.getCurrentHash();
        this.setCurrentPage();
    }

    private handlerAction(event: Event) {
        if (event.target instanceof HTMLElement) {
            const isRemoveBtn = event.target.closest("[data-action='remove']");

            if (isRemoveBtn) {
                this.removeNoteItem(isRemoveBtn);
            }
        }
    }

    setCurrentPage(urlPage: string = this.currentHashGlobal) {
        const currentPageLink = urlPage;
        const currentData = DataHandler.initialStorage();
        checkTrust(currentPageLink);
        this.listNotesView.createCurrentList(currentData, currentPageLink);
        this.setListener();
    }
}
