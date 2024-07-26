interface DataNote {
    title: string;
    isFavorite: string;
    text: string;
    id: number | undefined;
    date: string;
    changed: boolean;
}

interface allNotesParams {
    regularNotes: DataNote[];
    favoriteNotes: DataNote[];
}

const inputsName = {
    titleInput: "title",
    favoriteCheckbox: "favorite",
    textInput: "text",
};

export default class ModalNoteModel {
    private static instance: ModalNoteModel;
    private allNotes: allNotesParams;
    private key: string;

    private constructor() {
        this.key = "notes";
        this.initialStorage();
    }

    private initialStorage() {
        const initialNotes = this.getNotesFromLocalStorage(this.key);
        if (initialNotes) {
            this.allNotes = initialNotes;
        } else {
            this.allNotes = {
                regularNotes: [],
                favoriteNotes: [],
            };
        }
    }

    private pushNewNoteObj(obj: DataNote) {
        if (obj.isFavorite) {
            this.allNotes.favoriteNotes.push(obj);
        } else if (!obj.isFavorite) {
            this.allNotes.regularNotes.push(obj);
        }
    }

    private setNotesToLocalStorage(key: string, data: allNotesParams) {
        const dataString = JSON.stringify(data);
        localStorage.setItem(key, dataString);
    }

    private getNotesFromLocalStorage(key: string) {
        const stringFromLocal = localStorage.getItem(key);
        if (stringFromLocal) {
            const parseDate = JSON.parse(stringFromLocal);
            return parseDate;
        }
    }

    private setDate() {
        const currentDate = new Date();
        const dateString = currentDate.toLocaleString("ru-RU", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
        });

        return dateString;
    }

    public static getInstance(): ModalNoteModel {
        if (!ModalNoteModel.instance) {
            ModalNoteModel.instance = new ModalNoteModel();
        }
        return ModalNoteModel.instance;
    }

    dataNoteCreator(data: FormData) {
        const newObj: DataNote = {
            title: "",
            isFavorite: "",
            text: "",
            id: 0,
            date: "",
            changed: false,
        };

        const title = data.get(inputsName.titleInput);
        const statusFavorite = data.get(inputsName.favoriteCheckbox);
        const text = data.get(inputsName.textInput);

        if (typeof title === "string") {
            newObj.title = title;
        }

        if (typeof text === "string") {
            newObj.text = text;
        }

        if (statusFavorite === "on") {
            newObj.isFavorite = statusFavorite;
            newObj.id = this.allNotes.favoriteNotes.length + 1;
        } else {
            newObj.id = this.allNotes.regularNotes.length + 1;
        }

        newObj.date = this.setDate();

        this.pushNewNoteObj(newObj);
        this.setNotesToLocalStorage(this.key, this.allNotes);
    }
}
