import { ElementParams } from "../utilities/types";
import View from "../utilities/view";

const headerListParams: ElementParams = {
    tagName: "header",
    classList: ["header"],
};

const containerListParams: ElementParams = {
    tagName: "div",
    classList: ["container"],
};

const contentListParams: ElementParams = {
    tagName: "div",
    classList: ["header__content"],
};

export default class HeaderView extends View {
    constructor() {
        super(headerListParams);
        this.configureView();
    }

    configureView() {
        const container = this.createElement(containerListParams);
        this.addInnerElement(this.component.getHtmlElement(), container);

        const headerContent = this.createElement(contentListParams);
        this.addInnerElement(container, headerContent);
    }
}
