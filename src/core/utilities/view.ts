import { ElementParams } from "./types";
import Creator from "./creator";

abstract class BaseClassView {
    component: Creator;

    constructor(params: ElementParams) {
        this.component = new Creator(params);
    }
    abstract getComponent(): HTMLElement;
    abstract createElement(params: ElementParams): HTMLElement;
}

export default class View extends BaseClassView {
    constructor(params: ElementParams) {
        super(params);
    }

    getComponent() {
        return this.component.getHtmlElement();
    }

    createElement(params: ElementParams) {
        const newElement = new Creator(params);
        return newElement.getHtmlElement();
    }

    addInnerElement(parent: HTMLElement, element: HTMLElement): void {
        parent.appendChild(element);
    }
}
