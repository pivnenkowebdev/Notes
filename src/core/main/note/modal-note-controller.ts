import ModalNoteView from "./modal-note-view";
import ModalNoteModel from "./modal-note-model";

export default class ModalNoteController {
    modalView: ModalNoteView;
    modalModel: ModalNoteModel;
    constructor(status: string) {
        this.modalView = new ModalNoteView(status);
        this.modalModel = ModalNoteModel.getInstance(status);
        this.setListener();
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
            this.modalModel.dataNoteCreator(data);
            this.removeRender();
        }
    };

    initialModal() {
        this.modalView.renderModal();
    }
}
