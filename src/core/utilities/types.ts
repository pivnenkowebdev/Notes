export interface AttributeParams {
    [key: string]: string;
}

export interface ElementParams {
    tagName: string;
    classList: string[];
    textContent?: string;
    id?: string | number;
    href?: string;
    eventType?: string;
    attrParams?: AttributeParams;
    callback?: (event: Event) => void;
}
