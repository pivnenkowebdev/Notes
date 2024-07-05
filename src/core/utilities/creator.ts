import { ElementParams } from "./types";

abstract class BaseClassCreator {
    element: HTMLElement;

    constructor(params: ElementParams) {
        this.element = this.createNewElement(params);
    }

    abstract createNewElement(params: ElementParams): HTMLElement;
    abstract setClassName(classList: string[]): void;
    abstract setInnerText(value?: string): void;
    abstract setId(value?: string | number): void;
    abstract setHref(value?: string): void;
    abstract getHtmlElement(): HTMLElement;
}

export default class Creator extends BaseClassCreator {
    constructor(params: ElementParams) {
        super(params);
    }

    getHtmlElement(): HTMLElement {
        return this.element;
    }

    createNewElement(params: ElementParams): HTMLElement {
        this.element = document.createElement(params.tagName);
        this.setClassName(params.classList);
        this.setInnerText(params.textContent);
        this.setId(params.id);
        this.setHref(params.href);
        return this.element;
    }

    setClassName(classList: string[]): void {
        if (classList.length > 0) {
            this.element.classList.add(...classList);
        }
    }

    setInnerText(value?: string) {
        if (value && value.trim().length > 0) {
            this.element.innerText = value;
        }
    }

    setId(id?: string | number) {
        if (id !== undefined && id !== null) {
            this.element.id = String(id);
        }
    }

    setListener(eventType: string, callBack: (event: Event) => void) {
        this.element.addEventListener(eventType, callBack);
    }

    setHref(value?: string) {
        if (this.element instanceof HTMLAnchorElement) {
            this.element.href = `#${value}`;
        }
    }
}
