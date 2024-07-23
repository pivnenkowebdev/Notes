import ModalNoteView from "./modal-note-view";

export default class ModalNoteController {
    modalView: ModalNoteView;
    constructor(status: string) {
        this.modalView = new ModalNoteView(status);
        this.setListener();
    }

    private setListener() {
        this.modalView
            .getComponent()
            .addEventListener("click", (event: Event) =>
                this.handlerAction(event)
            );
    }

    private showModal() {
        this.modalView.renderModal();
    }

    private handlerAction(event: Event) {
        event.preventDefault();
        if (event.target !== null && event.target instanceof HTMLElement) {
            const isFade = event.target.hasAttribute("data-fade");
            const isCancelButton = event.target.closest(
                "[data-controll='cancel']"
            );
            const isFavoriteCheck = event.target.closest("#favoriteCheck");

            if (isCancelButton || isFade) {
                this.modalView.removeModal();
            }

            if (isFavoriteCheck) {
                this.getStatusNote();
            }
        }
    }

    private getStatusNote() {
        this.modalView.changeStatus();
    }

    initialModal() {
        this.showModal();
    }
}
