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

    // пересмотреть метод
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

    private static dataNoteCreator(data: FormData) {
        const newObj: DataNote = {
            title: "",
            text: "",
            isFavorite: "",
            id: "",
            date: "",
            changed: false,
        };

        const title = data.get(inputsName.titleInput);
        const text = data.get(inputsName.textInput);
        const statusFavorite = data.get(inputsName.favoriteCheckbox);

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
                const indexCurrentNote = currentList.indexOf(necessaryNote);
                return {
                    necessaryNote,
                    indexCurrentNote,
                    currentList,
                    selectedListIdentificator,
                };
            }
        }
    }

    static decreaseIdNotes(currentObjInfo: objInfoAboutNote) {
        for (
            let j = currentObjInfo.indexCurrentNote;
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

        if (currentObjInfo) {
            const counterDeletingNotes: number = 1;
            currentObjInfo.currentList.splice(
                currentObjInfo.indexCurrentNote,
                counterDeletingNotes
            );

            DataHandler.decreaseIdNotes(currentObjInfo);
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

    // 1. смена даты и времени (подписи) +
    // 1.1. сделать через статус
    // 2. смена избранная\не избранная при редактировании (можно сначала реализовать эту функцию и потом вшить дальше в режим редактирования)
    // 3. Убирать заглушки если в объекте пустота

    static changeNote(data: FormData) {
        const currentId = data.get(inputsName.id);

        if (typeof currentId === "string") {
            const objCurrentNote = DataHandler.findNote(currentId);
            const currentList = objCurrentNote?.currentList;
            const indexCurrentNote = objCurrentNote?.indexCurrentNote;
            checkTrust(currentList);
            checkTrust(indexCurrentNote);

            const currentNote = currentList[indexCurrentNote];
            currentNote.title = String(data.get(inputsName.titleInput));
            currentNote.text = String(data.get(inputsName.textInput));
            currentNote.date = DataHandler.setDate();
            currentNote.changed = true;
        }
    }

    static submitter(data: FormData) {
        if (data.get(inputsName.id)) {
            DataHandler.changeNote(data);
            DataHandler.setNotesToLocalStorage(
                DataHandler.key,
                DataHandler.allNotes
            );
            return;
        }

        const preparetedData = DataHandler.dataNoteCreator(data);
        DataHandler.pushNewNoteObj(preparetedData);
        DataHandler.setNotesToLocalStorage(
            DataHandler.key,
            DataHandler.allNotes
        );
    }
}
