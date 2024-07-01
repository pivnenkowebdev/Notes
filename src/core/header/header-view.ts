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
    classList: ["pt-4", "pb-4", "flex", "justify-end"],
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

        const nightModeBtn = new NightModeBtnView();
        this.addInnerElement(headerContent, nightModeBtn);
    }
}
