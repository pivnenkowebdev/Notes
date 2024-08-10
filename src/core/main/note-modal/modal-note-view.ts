import View from "../../utilities/view";
import { ElementParams } from "../../utilities/types";
import { appContainer } from "../../app";
import { DataNote } from "../../utilities/types";

const fadeBlockParams: ElementParams = {
    tagName: "div",
    classList: [
        "h-screen",
        "w-screen",
        "bg-neutral-200/90",
        "dark:bg-gray-900/90",
        "fixed",
        "top-0",
        "left-0",
        "z-1",
    ],
    attrParams: {
        type: "submit",
        "data-controll": "fade",
    },
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
    attrParams: {
        placeholder: "Title",
        name: "title",
    },
};

const wrapperFakeCheckboxParams: ElementParams = {
    tagName: "label",
    classList: [],
};

const realCheckboxParams = {
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
    attrParams: {
        type: "checkbox",
        name: "favorite",
    },
};

const fakeCheckboxParams = {
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
        "before:bg-cover",
        "favoriteBtn",
    ],
    attrParams: {
        "data-controll": "check",
    },
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
        "mb-6",
        "focus:shadow-lg",
    ],
    attrParams: {
        placeholder: "Your note",
        name: "text",
    },
};

const wrapperButtonsControlParams: ElementParams = {
    tagName: "div",
    classList: ["flex", "gap-4", "justify-end"],
};

const buttonCancellParams: ElementParams = {
    tagName: "button",
    classList: [
        "bg-red-700",
        "rounded-lg",
        "py-1",
        "px-3",
        "text-gray-50",
        "text-xl",
        "capitalize",
        "cursor-pointer",
        "hover:opacity-80",
        "outline-none",
        "min-w-[107px]",
    ],
    textContent: "cancel",
    attrParams: {
        type: "button",
        "data-controll": "cancel",
    },
};

const buttonAddParams: ElementParams = {
    tagName: "button",
    classList: [
        "bg-cyan-600",
        "rounded-lg",
        "py-1",
        "px-3",
        "text-gray-50",
        "text-xl",
        "capitalize",
        "cursor-pointer",
        "hover:opacity-80",
        "outline-none",
        "min-w-[107px]",
    ],
    textContent: "add",
    attrParams: {
        type: "submit",
        "data-controll": "add",
    },
};

const buttonEditParams: ElementParams = {
    tagName: "button",
    classList: [
        "bg-cyan-600",
        "rounded-lg",
        "py-1",
        "px-3",
        "text-gray-50",
        "text-xl",
        "capitalize",
        "cursor-pointer",
        "hover:opacity-80",
        "outline-none",
        "min-w-[107px]",
    ],
    textContent: "edit",
    attrParams: {
        type: "submit",
        "data-controll": "edit",
    },
};

export default class ModalNoteView extends View {
    fade: HTMLElement;
    form: HTMLElement;
    realCheckbox: HTMLElement;
    fakeCheckbox: HTMLSpanElement;
    cancelBtn: HTMLElement;
    constructor(status: string, noteObj?: DataNote) {
        const formParams: ElementParams = {
            tagName: "form",
            classList: [
                "max-w-[915px]",
                "w-full",
                "py-9",
                "px-[36px]",
                "bg-white",
                "rounded-md",
                "shadow-lg",
                "absolute",
                "bottom-1/2",
                "right-1/2",
                "translate-x-1/2",
                "translate-y-1/2",
                "z-2",
            ],
            id: "form",
        };

        if (noteObj) {
            console.log(1);
        }

        super(formParams);
        this.configureView(status);
    }

    private configureView(status: string) {
        this.fade = this.createElement(fadeBlockParams);
        this.addInnerElement(appContainer, this.fade);
        this.addInnerElement(appContainer, this.component.getHtmlElement());

        const titleWrapper = this.createElement(titleWrapperParams);
        this.addInnerElement(this.component.getHtmlElement(), titleWrapper);

        const inputTitle = this.createElement(inputTitleWrapperParams);
        this.addInnerElement(titleWrapper, inputTitle);

        const wrapperFakeCheckbox = this.createElement(
            wrapperFakeCheckboxParams
        );
        this.addInnerElement(titleWrapper, wrapperFakeCheckbox);

        this.realCheckbox = this.createElement(realCheckboxParams);
        this.addInnerElement(wrapperFakeCheckbox, this.realCheckbox);

        this.fakeCheckbox = this.createElement(fakeCheckboxParams);
        this.addInnerElement(wrapperFakeCheckbox, this.fakeCheckbox);

        const textarea = this.createElement(textareaParams);
        this.addInnerElement(this.component.getHtmlElement(), textarea);

        const buttonsList = this.createElement(wrapperButtonsControlParams);
        this.addInnerElement(this.component.getHtmlElement(), buttonsList);

        this.cancelBtn = this.createElement(buttonCancellParams);
        this.addInnerElement(buttonsList, this.cancelBtn);

        if (status === "new") {
            const buttonAdd = this.createElement(buttonAddParams);
            this.addInnerElement(buttonsList, buttonAdd);
        } else if (status === "edit") {
            const buttonEdit = this.createElement(buttonEditParams);
            this.addInnerElement(buttonsList, buttonEdit);
        }
    }

    renderModal() {
        this.addInnerElement(appContainer, this.getComponent());
        const isFirstInput: HTMLInputElement | null = this.component
            .getHtmlElement()
            .querySelector("input");
        if (isFirstInput) {
            isFirstInput.focus();
        }
    }

    removeModal() {
        this.component.getHtmlElement().remove();
        this.fade.remove();
    }
}
