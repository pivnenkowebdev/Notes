import { ElementParams } from "./types";
import Creator from "./creator";

abstract class BaseClassView {
    component: HTMLElement;

    constructor(params: ElementParams) {
        this.component = this.createComponent(params);
    }

    abstract createComponent(params: ElementParams): HTMLElement;
    abstract getComponent(params: ElementParams): HTMLElement;
}

export default class View extends BaseClassView {
    constructor(params: ElementParams) {
        super(params);
        this.getComponent();
    }

    createComponent(params: ElementParams): HTMLElement {
        const componentCreator = new Creator(params);
        return componentCreator.getHtmlElement();
    }

    getComponent() {
        return this.component;
    }
}
