import { DataNote, allNotesParams } from "../utilities/types";

const inputsName = {
    titleInput: "title",
    favoriteCheckbox: "favorite",
    textInput: "text",
};

export default class DataHandler {
    static allNotes: allNotesParams;
    static key: string = "notes";

    private constructor() {}

    private static initialStorage() {
        const initialNotes = DataHandler.getNotesFromLocalStorage(
            DataHandler.key
        );
        if (initialNotes) {
            DataHandler.allNotes = initialNotes;
        } else {
            DataHandler.allNotes = {
                regularNotes: [],
                favoriteNotes: [],
            };
        }
    }

    private static pushNewNoteObj(obj: DataNote) {
        if (obj.isFavorite) {
            DataHandler.allNotes.favoriteNotes.push(obj);
        } else {
            DataHandler.allNotes.regularNotes.push(obj);
        }
    }

    private static setNotesToLocalStorage(key: string, data: allNotesParams) {
        const dataString = JSON.stringify(data);
        localStorage.setItem(key, dataString);
    }

    private static setDate() {
        const currentDate = new Date();
        return currentDate.toLocaleString("ru-RU", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    private static dataNoteCreator(data: FormData) {
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
            newObj.id = DataHandler.allNotes.favoriteNotes.length + 1;
        } else {
            newObj.id = DataHandler.allNotes.regularNotes.length + 1;
        }

        newObj.date = DataHandler.setDate();

        return newObj;
    }

    static initialize() {
        DataHandler.initialStorage();
    }

    static getNotesFromLocalStorage(key = this.key) {
        const stringFromLocal = localStorage.getItem(key);
        if (stringFromLocal) {
            return JSON.parse(stringFromLocal) as allNotesParams;
        }
        return null;
    }

    static submitter(data: FormData) {
        const preparetedData = DataHandler.dataNoteCreator(data);

        DataHandler.pushNewNoteObj(preparetedData);
        DataHandler.setNotesToLocalStorage(
            DataHandler.key,
            DataHandler.allNotes
        );
    }
}
