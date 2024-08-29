import { ElementParams, AttributeParams } from "./types";

abstract class BaseClassCreator {
    protected element: HTMLElement;

    constructor(params: ElementParams) {
        this.element = this.createNewElement(params);
    }

    protected abstract createNewElement(params: ElementParams): HTMLElement;
    protected abstract setClassName(classList: string[]): void;
    protected abstract setInnerText(value?: string): void;
    protected abstract setId(value?: string | number | undefined): void;
    protected abstract setHref(value?: string): void;
    protected abstract setDataAttr(value?: AttributeParams): void;
    protected abstract setCallback(
        eventType: string,
        callBack?: (event?: Event) => void
    ): void;
    abstract getHtmlElement(): HTMLElement;
}

export default class Creator extends BaseClassCreator {
    constructor(params: ElementParams) {
        super(params);
    }

    protected createNewElement(params: ElementParams): HTMLElement {
        this.element = document.createElement(params.tagName);
        this.setClassName(params.classList);
        this.setInnerText(params.textContent);
        this.setId(params.id);
        this.setHref(params.href);
        this.setDataAttr(params.attrParams);
        this.setCallback(params.eventType, params.callback);
        return this.element;
    }

    getHtmlElement(): HTMLElement {
        return this.element;
    }

    protected setClassName(classList?: string[]): void {
        if (classList && classList.length > 0) {
            this.element.classList.add(...classList);
        }
    }

    protected setInnerText(value?: string) {
        if (value && value.trim().length > 0) {
            this.element.innerText = value;
        }
    }

    protected setId(id?: string | number | undefined) {
        if (id !== undefined && id !== null) {
            this.element.id = String(id);
        }
    }

    protected setHref(value?: string) {
        if (this.element instanceof HTMLAnchorElement) {
            this.element.href = `#${value}`;
        }
    }

    protected setDataAttr(attrParams?: AttributeParams) {
        if (attrParams !== undefined) {
            for (const key in attrParams) {
                this.element.setAttribute(key, attrParams[key]);
            }
        }
    }

    protected setCallback(
        eventType?: string,
        callBack?: (event?: Event) => void
    ) {
        if (eventType !== undefined && callBack !== undefined) {
            this.element.addEventListener(eventType, (event) =>
                callBack(event)
            );
        }
    }
}
