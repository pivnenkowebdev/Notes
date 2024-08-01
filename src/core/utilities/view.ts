import { ElementParams } from "./types";
import Creator from "./creator";

abstract class BaseClassView {
    protected component: Creator;

    constructor(params: ElementParams) {
        this.component = new Creator(params);
    }
    protected abstract getComponent(): HTMLElement;
    protected abstract createElement(params: ElementParams): HTMLElement;
}

export default class View extends BaseClassView {
    constructor(params: ElementParams) {
        super(params);
    }

    getComponent() {
        return this.component.getHtmlElement();
    }

    protected createElement(params: ElementParams) {
        const newElement = new Creator(params);
        return newElement.getHtmlElement();
    }

    protected addInnerElement(
        parent: HTMLElement,
        element: HTMLElement | View | DocumentFragment
    ): void {
        if (element instanceof View) {
            parent.appendChild(element.getComponent());
        } else {
            parent.appendChild(element);
        }
    }
}
