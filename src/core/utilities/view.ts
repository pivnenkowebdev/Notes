import { ElementParams } from "./types";
import Creator from "./creator";

abstract class BaseClassView {
    component: HTMLElement;

    constructor(params: ElementParams) {
        this.component = this.getComponent(params);
    }

    abstract getComponent(params: ElementParams): HTMLElement;
    abstract getHtmlElement(): HTMLElement;
}

export default class View extends BaseClassView {
    constructor(params: ElementParams) {
        super(params);
    }

    getComponent(params: ElementParams): HTMLElement {
        const newComponent = new Creator(params);
        return newComponent.getElement();
    }

    getHtmlElement(): HTMLElement {
        return this.component;
    }

    addInnerElement(params: ElementParams, parent?: HTMLElement) {
        const innerComponent = this.getComponent(params);
        if (parent) {
            parent.appendChild(innerComponent);
        }
        return innerComponent;
    }
}
