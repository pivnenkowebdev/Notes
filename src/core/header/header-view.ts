import { ElementParams } from "../utilities/types";
import View from "../utilities/view";
import NightModeBtnView from "./night-mode-btn/night-mode-btn";

const headerParams: ElementParams = {
    tagName: "header",
    classList: [],
};

const containerParams: ElementParams = {
    tagName: "div",
    classList: ["container"],
};

const contentParams: ElementParams = {
    tagName: "div",
    classList: [
        "pt-4",
        "pb-4",
        "flex",
        "justify-between",
        "items-center",
        "border-b-2",
        "border-cyan-700",
    ],
};

const mainTitleParams: ElementParams = {
    tagName: "h1",
    textContent: "To-Do",
    classList: [
        "text-xl",
        "font-semibold",
        "text-cyan-700",
        "font-['Roboto_Slab']",
    ],
};

export default class HeaderView extends View {
    constructor() {
        super(headerParams);
        this.configureView();
    }

    configureView() {
        const container = this.createElement(containerParams);
        this.addInnerElement(this.component.getHtmlElement(), container);

        const headerContent = this.createElement(contentParams);
        this.addInnerElement(container, headerContent);

        const mainTitle = this.createElement(mainTitleParams);
        this.addInnerElement(headerContent, mainTitle);

        const nightModeBtn = new NightModeBtnView();
        this.addInnerElement(headerContent, nightModeBtn);
    }
}
