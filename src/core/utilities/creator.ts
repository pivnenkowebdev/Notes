interface ElementParams {
    tagName: string;
    classList: string[];
    textContent?: string;
    id?: string | number;
}

abstract class BaseClassCreator {
    element: HTMLElement;

    constructor(params: ElementParams) {
        this.element = this.createNewElement(params);
    }

    abstract createNewElement(params: ElementParams): HTMLElement;
    abstract addClassName(newElement: HTMLElement, classList: string[]): void;
    abstract addInnerText(newElement: HTMLElement, value?: string): void;
    abstract addId(newElement: HTMLElement, value?: string | number): void;
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
        this.addClassName(newElement, params.classList);
        this.addInnerText(newElement, params.textContent);
        this.addId(newElement, params.id);
        return newElement;
    }

    addClassName(newElement: HTMLElement, classList: string[]): void {
        if (classList.length > 0) {
            newElement.classList.add(...classList);
        }
    }

    addInnerText(newElement: HTMLElement, value?: string) {
        if (value && value.trim().length > 0) {
            newElement.innerText = value;
        }
    }

    addId(newElement: HTMLElement, id?: string | number) {
        if (id !== undefined) {
            newElement.id = String(id);
        }
    }
}
