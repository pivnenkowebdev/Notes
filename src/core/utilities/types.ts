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

export interface DataNote {
    title: string;
    isFavorite: string;
    text: string;
    id: number | undefined;
    date: string;
    changed: boolean;
}

export interface allNotesParams {
    regularNotes: DataNote[];
    favoriteNotes: DataNote[];
}
