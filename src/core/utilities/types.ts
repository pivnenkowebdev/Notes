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
    id: number | string | undefined;
    date: string;
    changed: boolean;
}

export interface allNotesParams {
    regularNotes: DataNote[];
    favoriteNotes: DataNote[];
}

export interface objInfoAboutNote {
    necessaryNote: DataNote;
    currentList: DataNote[];
    selectedListIdentificator: string;
}
