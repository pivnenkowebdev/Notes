import { DataNote, allNotesParams } from "../utilities/types";
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

    // рефактор
    // отдельный метод для поиска по id
    // если была передана id, то создавать объект на основе старой заметки
    // менять статус

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
        // const id = data.get(inputsName.id);

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

        newObj.id = DataHandler.setId(statusFavorite);

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

    static findNote(currentId: string) {
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
                return { necessaryNote, currentList };
            }
        }
    }

    static removeNote(idCurrentNote: string) {
        const currentObjInfo = this.findNote(idCurrentNote);
        if (currentObjInfo) {
            const counterDeletingNotes: number = 1;
            let indexCurrentNote: number = 1;

            for (let i = 0; i < currentObjInfo.currentList.length; i++) {
                const currentNote = currentObjInfo.currentList[i];
                if (idCurrentNote === currentNote.id) {
                    const necessaryNote = currentObjInfo.currentList[i];
                    indexCurrentNote =
                        currentObjInfo.currentList.indexOf(necessaryNote);
                    currentObjInfo.currentList.splice(
                        indexCurrentNote,
                        counterDeletingNotes
                    );
                    break;
                }
            }
        }
        // по какой-то причине выводится по количеству заметок
        // это происходит только если не обновить страницу или после создания заметки
        // console.log(1);

        // const nextNoteIndex = indexCurrentNote;
        // console.log(currentList[nextNoteIndex]);

        // for (let j = nextNoteIndex; j < currentList.length; j++) {
        //     const currentOldId = currentList[j].id;
        //     if (currentOldId && typeof currentOldId === "string") {
        //             const currentOldIdNumber = parseFloat(currentOldId);
        //             const newDecrementIDNumber = currentOldIdNumber - 1;
        //             const newId = newDecrementIDNumber + identificator;
        //             currentList[j].id = newId;
        //     }
        // }
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
