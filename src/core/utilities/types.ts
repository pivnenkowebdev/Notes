export interface ElementParams {
    tagName: string;
    classList: string[];
    textContent?: string;
    id?: string | number;
    href?: string;
    eventType?: string;
    nameAttr?: string;
    valueAttr?: string;
    callback?: (event: Event) => void;
}
