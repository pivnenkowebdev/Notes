import ModalNoteView from "./modal-note-view";
import DataHandler from "../../utilities/data-handler";
import ListNotesController from "../list-notes/list-notes-controller";
import { DataNote } from "../../utilities/types";

export default class ModalNoteController {
    modalView: ModalNoteView;
    currentPageId: string;
    listController: ListNotesController;
    editNoteObj: DataNote | undefined;

    // если id передано, то вызвать из handlera метод для поиска заметки
    // набить модалку данными из объекта
    constructor(status: string, currentId?: string) {
        if (currentId) {
            this.editNoteObj = DataHandler.findNote(currentId)?.necessaryNote;
        }
        this.modalView = new ModalNoteView(status, this.editNoteObj);
        this.setListener();
        this.listController = new ListNotesController();
    }

    private removeRender() {
        this.modalView.removeModal();
    }

    private setListener() {
        this.modalView
            .getComponent()
            .addEventListener("submit", this.dataCollector);

        window.addEventListener("click", this.handlerAction);
    }

    private handlerAction = (event: Event) => {
        if (event.target instanceof HTMLElement) {
            const isCancelBtn = event.target.closest(
                "[data-controll='cancel']"
            );
            const isFade = event.target.closest("[data-controll='fade']");

            if (isCancelBtn || isFade) {
                this.removeRender();
            }
        }
    };

    private dataCollector = (event: Event) => {
        event.preventDefault();
        const form = this.modalView.getComponent();
        if (form instanceof HTMLFormElement) {
            const data = new FormData(form);
            DataHandler.submitter(data);
            this.listController.setCurrentPage();
            this.removeRender();
        }
    };

    initialModal() {
        this.listController.setCurrentPage();
    }
}
