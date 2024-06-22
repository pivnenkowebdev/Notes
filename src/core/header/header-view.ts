import { ElementParams } from "../utilities/types";
import Creator from "../utilities/creator";

export default class HeaderVie {
    component: HTMLElement;
    constructor() {
        const headerListParams = {
            tagName: "header",
            classList: ["header", "redHeader"],
            textContent: "Header",
            id: 1,
        };
        this.component = this.returnComponent(headerListParams);
    }

    returnComponent(params: ElementParams) {
        const newComponent = new Creator(params);
        return newComponent.getElement();
    }

    getHtmlElement() {
        return this.component;
    }
}
