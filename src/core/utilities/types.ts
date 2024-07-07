export interface ElementParams {
    tagName: string;
    classList: string[];
    textContent?: string;
    id?: string | number;
    href?: string;
    eventType?: string;
    callback?: (event: Event) => void;
}
