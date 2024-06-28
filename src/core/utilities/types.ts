export interface ElementParams {
    tagName: string;
    classList: string[];
    textContent?: string;
    id?: string | number;
    eventMode?: string;
    callback?: (event: Event) => void;
}
