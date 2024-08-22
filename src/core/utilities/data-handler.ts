import { DataNote, allNotesParams, objInfoAboutNote } from "../utilities/types";
import { checkTrust } from "./helper";

const inputsName = {
    titleInput: "title",
    favoriteCheckbox: "favorite",
    textInput: "text",
    id: "id",
};

export default class DataHandler {
    static allNotes: allNotesParams;
    static key: string = "notes";

    private constructor() {}

    private static setNotesToLocalStorage(
        key: string = this.key,
        data: allNotesParams = this.allNotes
    ) {
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

    // если был передан объект заметки, то создавать объект на основе старой заметки
    // переопределять нужную заметку
    // менять статус

    private static dataNoteCreator(data: FormData) {
        const newObj: DataNote = {
            title: "",
            isFavorite: "",
            text: "",
            id: "",
            date: "",
            changed: false,
        };

        const title = data.get(inputsName.titleInput);
        const statusFavorite = data.get(inputsName.favoriteCheckbox);
        const text = data.get(inputsName.textInput);
        const id = data.get(inputsName.id);

        if (typeof title === "string" && title.trim()) {
            newObj.title = title;
        } else {
            newObj.title = "No title";
        }

        if (typeof text === "string" && text.trim()) {
            newObj.text = text;
        } else {
            newObj.text = "Empty";
        }

        if (typeof statusFavorite === "string") {
            newObj.isFavorite = statusFavorite;
        }

        if (id) {
            newObj.id = id.toString();
        } else {
            newObj.id = DataHandler.setId(statusFavorite);
        }

        newObj.date = DataHandler.setDate();

        return newObj;
    }

    private static pushNewNoteObj(obj: DataNote) {
        if (obj.isFavorite) {
            DataHandler.allNotes.favoriteNotes.push(obj);
        } else {
            DataHandler.allNotes.regularNotes.push(obj);
        }
    }

    static findNote(currentId: string): objInfoAboutNote | undefined {
        const selectedListIdentificator = currentId.slice(1, currentId.length);

        let currentList;

        if (selectedListIdentificator === "favorites") {
            currentList = this.allNotes.favoriteNotes;
        } else if (selectedListIdentificator === "regulars") {
            currentList = this.allNotes.regularNotes;
        }

        checkTrust(currentList);

        for (let i = 0; i < currentList.length; i++) {
            const currentNote = currentList[i];
            if (currentId === currentNote.id) {
                const necessaryNote = currentList[i];
                return {
                    necessaryNote,
                    currentList,
                    selectedListIdentificator,
                };
            }
        }
    }

    static decreaseIdNotes(
        indexCurrentNote: number,
        currentObjInfo: objInfoAboutNote
    ) {
        for (
            let j = indexCurrentNote;
            j < currentObjInfo.currentList.length;
            j++
        ) {
            const currentOldId = currentObjInfo.currentList[j].id;
            if (currentOldId && typeof currentOldId === "string") {
                const currentOldIdNumber = parseFloat(currentOldId);
                const newDecrementIDNumber = currentOldIdNumber - 1;
                const newId =
                    newDecrementIDNumber +
                    currentObjInfo.selectedListIdentificator;
                currentObjInfo.currentList[j].id = newId;
            }
        }
    }

    static removeNote(idCurrentNote: string) {
        const currentObjInfo = this.findNote(idCurrentNote);
        let indexCurrentNote: number = 1;

        if (currentObjInfo) {
            const counterDeletingNotes: number = 1;
            indexCurrentNote = currentObjInfo.currentList.indexOf(
                currentObjInfo.necessaryNote
            );
            currentObjInfo.currentList.splice(
                indexCurrentNote,
                counterDeletingNotes
            );

            DataHandler.decreaseIdNotes(indexCurrentNote, currentObjInfo);
        }
        this.setNotesToLocalStorage();
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
