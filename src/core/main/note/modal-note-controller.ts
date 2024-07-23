import ModalNoteView from "./modal-note-view";

export default class ModalNoteController {
    modal: ModalNoteView;
    constructor(status: string) {
        this.modal = new ModalNoteView(status);
        this.setListener();
    }

    private setListener() {
        this.modal
            .getComponent()
            .addEventListener("click", (event: Event) =>
                this.handlerAction(event)
            );
    }

    private showModal() {
        this.modal.renderModal();
    }

    private handlerAction(event: Event) {
        event.preventDefault();
        if (event.target !== null && event.target instanceof HTMLElement) {
            const isCancelButton = event.target.closest(
                "[data-controll='cancel']"
            );
            // const isAddButton = event.target.closest("[data-controll='add']");
            // const isEditButton = event.target.closest("[data-controll='edit']");

            if (isCancelButton) {
                this.modal.removeModal();
            }
        }
    }

    initialModal() {
        this.showModal();
    }
}
