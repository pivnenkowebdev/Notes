import View from "../utilities/view";
import { ElementParams } from "../utilities/types";

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
        const container = this.addInnerElement(
            containerListParams,
            this.component
        );
        this.addInnerElement(contentListParams, container);
    }
}
