import View from "../../utilities/view";
import { ElementParams } from "../../utilities/types";
import { appContainer } from "../../app";

const formParams: ElementParams = {
    tagName: "form",
    classList: [
        "max-w-[915px]",
        "w-full",
        "py-9",
        "px-[36px]",
        "mx-3",
        "bg-white",
    ],
};

const titleWrapperParams: ElementParams = {
    tagName: "div",
    classList: ["flex", "align-center"],
};

const inputTitleWrapperParams: ElementParams = {
    tagName: "input",
    classList: ["block", "max-w-[330px]", "w-full", "bg-black"],
};

export default class ModalNoteView extends View {
    constructor() {
        const fadeBlockParams: ElementParams = {
            tagName: "div",
            classList: [
                "h-screen",
                "w-screen",
                "bg-neutral-200/90",
                "fixed",
                "top-0",
                "left-0",
                "flex",
                "items-center",
                "justify-center",
            ],
        };
        super(fadeBlockParams);
        this.configureView();
    }

    configureView() {
        this.addInnerElement(appContainer, this.getComponent());

        const form = this.createElement(formParams);
        this.addInnerElement(this.component.getHtmlElement(), form);

        const titleWrapper = this.createElement(titleWrapperParams);
        this.addInnerElement(form, titleWrapper);

        const inputTitle = this.createElement(inputTitleWrapperParams);
        this.addInnerElement(titleWrapper, inputTitle);
    }
}

// 1. Достилизовать форму
// 2. Создать model и controller
// 3.
