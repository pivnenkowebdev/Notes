import ModalNoteView from "./modal-note-view";
import ModalNoteModel from "./modal-note-model";

export default class ModalNoteController {
    modalView: ModalNoteView;
    modalModel: ModalNoteModel;
    constructor(status: string) {
        this.modalView = new ModalNoteView(status);
        this.modalModel = new ModalNoteModel();
        this.setListener();
    }

    private removeRender() {
        this.modalView.removeModal();
    }

    private setListener() {
        this.modalView
            .getComponent()
            .addEventListener("submit", this.submitter);

        window.addEventListener("click", this.handlerAcrtion);
    }

    private handlerAcrtion = (event: Event) => {
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

    private submitter = (event: Event) => {
        event.preventDefault();
        this.modalModel.test();
        this.removeRender();
    };

    initialModal() {
        this.modalView.renderModal();
    }
}
