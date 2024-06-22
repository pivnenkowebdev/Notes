import { ElementParams } from "./types";

abstract class BaseClassCreator {
    element: HTMLElement;

    constructor(params: ElementParams) {
        this.element = this.createNewElement(params);
    }

    abstract createNewElement(params: ElementParams): HTMLElement;
    abstract setClassName(newElement: HTMLElement, classList: string[]): void;
    abstract setInnerText(newElement: HTMLElement, value?: string): void;
    abstract setId(newElement: HTMLElement, value?: string | number): void;
    // abstract addInnerElement(): HTMLElement;
}

export default class Creator extends BaseClassCreator {
    constructor(params: ElementParams) {
        super(params);
    }

    getElement(): HTMLElement {
        return this.element;
    }

    createNewElement(params: ElementParams): HTMLElement {
        const newElement: HTMLElement = document.createElement(params.tagName);
        this.setClassName(newElement, params.classList);
        this.setInnerText(newElement, params.textContent);
        this.setId(newElement, params.id);
        return newElement;
    }

    setClassName(newElement: HTMLElement, classList: string[]): void {
        if (classList.length > 0) {
            newElement.classList.add(...classList);
        }
    }

    setInnerText(newElement: HTMLElement, value?: string) {
        if (value && value.trim().length > 0) {
            newElement.innerText = value;
        }
    }

    setId(newElement: HTMLElement, id?: string | number) {
        if (id !== undefined) {
            newElement.id = String(id);
        }
    }
}
