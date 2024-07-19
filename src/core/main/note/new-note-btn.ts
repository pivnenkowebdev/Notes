import View from "../../utilities/view";
import { ElementParams } from "../../utilities/types";

const imgParams: ElementParams = {
    tagName: "span",
    classList: [
        "w-7",
        "h-7",
        "block",
        "bg-cover",
        "bg-[url('../../img/btn-add-note.svg')]",
        "dark:bg-[url('../../img/btn-add-note-light.svg')]",
    ],
};

const titleParams: ElementParams = {
    tagName: "span",
    classList: [
        "text-xl",
        "font-semibold",
        "text-cyan-700",
        "dark:text-gray-50",
    ],
    textContent: "Add Note",
};

export default class NewNoteBtn extends View {
    constructor() {
        const btnNewNote: ElementParams = {
            tagName: "button",
            classList: ["flex", "align-center", "gap-2", "hover:opacity-80"],
        };

        super(btnNewNote);
        this.configureView();
    }

    configureView() {
        const titleBtn = this.createElement(titleParams);
        this.addInnerElement(this.getComponent(), titleBtn);

        const imgBtn = this.createElement(imgParams);
        this.addInnerElement(this.component.getHtmlElement(), imgBtn);
    }
}
