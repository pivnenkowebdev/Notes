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

    addInnerElement(parent: HTMLElement, element: HTMLElement | View): void {
        if (element instanceof View) {
            parent.appendChild(element.getComponent());
        } else {
            parent.appendChild(element);
        }
    }
}

// 2. избавиться от вызова getHtmlElement?
// 3. метод для колбэка
