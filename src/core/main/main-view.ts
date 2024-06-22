import { ElementParams } from "../utilities/types";
import Creator from "../utilities/creator";

export default class MainVie {
    component: HTMLElement;
    constructor() {
        const headerListParams = {
            tagName: "main",
            classList: ["main"],
            textContent: "Main",
            id: "main",
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
