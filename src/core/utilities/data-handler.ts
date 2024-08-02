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

    private static setNotesToLocalStorage(key: string, data: allNotesParams) {
        const dataString = JSON.stringify(data);
        localStorage.setItem(key, dataString);
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

        if (typeof title === "string" && title.trim()) {
            newObj.title = title;
        } else {
            newObj.title = "No title";
        }

        if (typeof text === "string") {
            newObj.text = text;
        }

        if (typeof statusFavorite === "string") {
            newObj.isFavorite = statusFavorite;
        }

        newObj.id = DataHandler.setId(statusFavorite);

        newObj.date = DataHandler.setDate();

        return newObj;
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

    private static setId(status: FormDataEntryValue | null) {
        const flagFavorites = "favorites";
        const flagRegulars = "regulars";
        let numberId;
        let doneId;

        if (status === "on") {
            numberId = DataHandler.allNotes.favoriteNotes.length + 1;
            doneId = numberId + flagFavorites;
        } else {
            numberId = DataHandler.allNotes.regularNotes.length + 1;
            doneId = numberId + flagRegulars;
        }
        return doneId;
    }

    private static pushNewNoteObj(obj: DataNote) {
        if (obj.isFavorite) {
            DataHandler.allNotes.favoriteNotes.push(obj);
        } else {
            DataHandler.allNotes.regularNotes.push(obj);
        }
    }

    static initialStorage(key = this.key) {
        const initialNotes = localStorage.getItem(key);

        if (initialNotes) {
            DataHandler.allNotes = JSON.parse(initialNotes);
        } else {
            DataHandler.allNotes = {
                regularNotes: [],
                favoriteNotes: [],
            };
        }
        return DataHandler.allNotes;
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
