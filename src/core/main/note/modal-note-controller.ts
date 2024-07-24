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
        this.modalView.form.addEventListener("submit", (event: Event) => {
            this.handlerAction(event);
        });

        this.modalView
            .getComponent()
            .addEventListener("click", (event: Event) =>
                this.handlerAction(event)
            );
    }

    private handlerAction(event: Event) {
        event.preventDefault();

        if (event.type === "submit") {
            this.modalModel.test();
            this.modalView.removeModal();
        } else if (event.type === "click") {
            console.log("c");
            if (event.target !== null && event.target instanceof HTMLElement) {
                const isFade = event.target.closest("#fade");
                const isCancelButton = event.target.closest(
                    "[data-controll = 'cancel']"
                );
                const isFavoriteCheck = event.target.closest(
                    "[data-controll = 'check']"
                );

                if (isCancelButton || isFade) {
                    this.removeRender();
                }

                if (isFavoriteCheck) {
                    this.getStatusNote();
                }
            }
        }
    }

    private getStatusNote() {
        this.modalView.changeStatus();
    }

    initialModal() {
        this.modalView.renderModal();
    }
}

// 1. клик и сабмит пересекаются
// возможные решения: изменить вёрстку, переписать условие (адекватное лаконичное условие), изменить подход к обработке событий...
// 2. инпуты отдельно искать не нужно, можно все собрать через метод формы
