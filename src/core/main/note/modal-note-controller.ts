import ModalNoteView from "./modal-note-view";
import ModalNoteModel from "./modal-note-model";

export default class ModalNoteController {
    modalView: ModalNoteView;
    modalModel: ModalNoteModel;
    constructor(status: string) {
        this.modalView = new ModalNoteView(status);
        this.modalModel = new ModalNoteModel();
        this.handlerAction();
    }

    private removeRender() {
        this.modalView.removeModal();
    }

    private handlerAction() {
        this.modalView
            .getComponent()
            .addEventListener("submit", (event: Event) => {
                event.preventDefault();
                this.modalModel.test();
                this.removeRender();
            });

        // слушать клик на окне и проверять что это кнопка или fade
        this.modalView.fade.addEventListener("click", () => {
            this.removeRender();
        });

        this.modalView.cancelBtn.addEventListener("click", () => {
            this.removeRender();
        });
    }

    initialModal() {
        this.modalView.renderModal();
    }
}
