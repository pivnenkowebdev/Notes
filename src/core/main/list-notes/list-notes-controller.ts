import ListNotesView from "./list-notes-view";
import DataHandler from "../../utilities/data-handler";
import { checkTrust } from "../../utilities/helper";
import Router from "../../utilities/rout";
import ModalNoteController from "../note-modal/modal-note-controller";

const status: string = "edit";

export default class ListNotesController {
    listNotesView: ListNotesView;
    private currentHashGlobal: string;
    protected isListener: boolean;

    constructor() {
        this.isListener = false;
        this.listNotesView = new ListNotesView();
        this.currentHashGlobal = Router.getCurrentHash();
    }

    private removeNoteItem(removeBtn: Element) {
        const currentRemoveNote = removeBtn.closest("[data-note]");

        checkTrust(currentRemoveNote);
        const idCurrentNote = currentRemoveNote.id;

        DataHandler.removeNote(idCurrentNote);
    }

    private editNote(editBtn: Element) {
        const currentEditNote = editBtn.closest("[data-note]");

        checkTrust(currentEditNote);
        const currentId = currentEditNote.id;

        const isModal = document.querySelector("#form");

        if (!isModal) {
            const isEditNote = status;
            new ModalNoteController(isEditNote, currentId);
        }
    }

    private handlerAction(event: Event) {
        if (event.target instanceof HTMLElement) {
            const isRemoveBtn = event.target.closest("[data-action='remove']");
            const isEditBtn = event.target.closest("[data-controll='edit']");

            if (isRemoveBtn) {
                this.removeNoteItem(isRemoveBtn);
            }

            if (isEditBtn) {
                this.editNote(isEditBtn);
            }

            this.currentHashGlobal = Router.getCurrentHash();
            this.setCurrentPage();
        }
    }

    setCurrentPage(urlPage: string = this.currentHashGlobal) {
        const currentPageLink = urlPage;
        const currentData = DataHandler.initialStorage();
        checkTrust(currentPageLink);
        this.listNotesView.createCurrentList(currentData, currentPageLink);
    }

    setListener() {
        const list = document.querySelector("#list");

        if (!this.isListener) {
            this.isListener = true;
            list?.addEventListener("click", (event) => {
                this.handlerAction(event);
            });
        }
    }
}
