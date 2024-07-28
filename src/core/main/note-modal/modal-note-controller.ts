import ModalNoteView from "./modal-note-view";
import DataHandler from "../../utilities/data-handler";

export default class ModalNoteController {
    modalView: ModalNoteView;

    constructor(status: string) {
        this.modalView = new ModalNoteView(status);
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
            DataHandler.submitter(data);
            this.removeRender();
        }
    };

    initialModal() {
        this.modalView.renderModal();
    }
}
