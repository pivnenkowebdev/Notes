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
    classList: [
        "max-w-[362px]",
        "mb-3",
        "flex",
        "items-center",
        "justify-between",
        "border-b-2",
        "border-cyan-600",
        "py-1",
    ],
};

const inputTitleWrapperParams: ElementParams = {
    tagName: "input",
    classList: ["block", "max-w-[330px]", "w-full", "outline-none", "text-2xl"],
    nameAttr: "placeholder",
    valueAttr: "Title",
};

const wrapperFakeCheckboxParams: ElementParams = {
    tagName: "label",
    classList: [],
};

const realCheckboxParams: ElementParams = {
    tagName: "input",
    classList: [
        "w-0",
        "h-0",
        "opacity-0",
        "absolute",
        "top-0",
        "left-0",
        "z-[-1]",
    ],
    nameAttr: "type",
    valueAttr: "checkbox",
};

const fakeCheckboxParams: ElementParams = {
    tagName: "span",
    classList: [
        "block",
        "w-6",
        "h-6",
        "relative",
        "cursor-pointer",
        "before:content-['']",
        "before:block",
        "before:absolute",
        "before:top-2/4",
        "before:left-2/4",
        "before:w-5",
        "before:h-5",
        "before:translate-y-[-50%]",
        "before:translate-x-[-50%]",
        "before:bg-[url('../../img/star-btn.svg')]",
        "before:bg-cover",
    ],
};

const textareaParams: ElementParams = {
    tagName: "textarea",
    classList: [
        "w-full",
        "min-h-[150px]",
        "max-h-[360px]",
        "resize-y",
        "outline-none",
        "text-xl",
        "scrollbar",
        "pr-1",
    ],
    nameAttr: "placeholder",
    valueAttr: "Your note",
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

        const wrapperFakeCheckbox = this.createElement(
            wrapperFakeCheckboxParams
        );
        this.addInnerElement(titleWrapper, wrapperFakeCheckbox);

        const realCheckbox = this.createElement(realCheckboxParams);
        this.addInnerElement(wrapperFakeCheckbox, realCheckbox);

        const fakeCheckbox = this.createElement(fakeCheckboxParams);
        this.addInnerElement(wrapperFakeCheckbox, fakeCheckbox);

        const textarea = this.createElement(textareaParams);
        this.addInnerElement(form, textarea);
    }
}
