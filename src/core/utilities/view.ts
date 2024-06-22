import { ElementParams } from "./types";
import Creator from "./creator";

abstract class BaseClassView {
    component: HTMLElement;

    constructor(params: ElementParams) {
        this.component = this.returnComponent(params);
    }

    abstract returnComponent(params: ElementParams): HTMLElement;
    abstract getHtmlElement(): HTMLElement;
}

export default class View extends BaseClassView {
    constructor(params: ElementParams) {
        super(params);
    }

    returnComponent(params: ElementParams): HTMLElement {
        const newComponent = new Creator(params);
        return newComponent.getElement();
    }

    getHtmlElement(): HTMLElement {
        return this.component;
    }
}
