import { ElementParams, allNotesParams, DataNote } from "../../utilities/types";
import View from "../../utilities/view";

const stagesListParams = {
    main: "home-page",
    favorites: "favorites-page",
};

const listItemParams: ElementParams = {
    tagName: "li",
    classList: ["border-cyan-700", "border-2", "py-1", "px-3", "rounded-md"],
};

const itemTopParams: ElementParams = {
    tagName: "div",
    classList: ["flex", "justify-between", "items-center"],
};

const titelAndDateWrapperParams: ElementParams = {
    tagName: "div",
    classList: ["flex", "gap-2", "items-center"],
};

const titleParams: ElementParams = {
    tagName: "p",
    classList: [],
};

const dateParams: ElementParams = {
    tagName: "p",
    classList: [],
};

const buttonsControlListParams: ElementParams = {
    tagName: "div",
    classList: ["flex", "gap-1", "items-center"],
};

const buttonFavoriteParams: ElementParams = {
    tagName: "button",
    classList: ["w-6", "h-6"],
};

const buttonEditParams: ElementParams = {
    tagName: "button",
    classList: ["w-6", "h-6"],
};

const buttonDeleteParams: ElementParams = {
    tagName: "button",
    classList: ["w-6", "h-6"],
};

const textPreviewParams: ElementParams = {
    tagName: "p",
    classList: [],
};

export default class ListNotesView extends View {
    constructor() {
        const listNotesParams: ElementParams = {
            tagName: "ul",
            classList: [
                "max-w-[900px]",
                "mx-auto",
                "flex",
                "flex-col",
                "gap-5",
            ],
        };
        super(listNotesParams);
    }

    private cleanWrapper() {
        this.getComponent().innerHTML = "";
    }

    createCurrentList(params: allNotesParams, stage: string) {
        this.cleanWrapper();
        if (stage === stagesListParams.main) {
            this.createNoteItem(params.favoriteNotes);
            this.createNoteItem(params.regularNotes);
        } else if (stage === stagesListParams.favorites) {
            this.createNoteItem(params.favoriteNotes);
        }
    }

    createNoteItem(listNotes: DataNote[]) {
        listNotes.forEach((item) => {
            console.log(item);

            const listItem = this.createElement(listItemParams);
            this.addInnerElement(this.getComponent(), listItem);

            const itemTop = this.createElement(itemTopParams);
            this.addInnerElement(listItem, itemTop);

            const titelAndDate = this.createElement(titelAndDateWrapperParams);
            this.addInnerElement(itemTop, titelAndDate);

            const title = this.createElement(titleParams);
            this.addInnerElement(titelAndDate, title);

            const date = this.createElement(dateParams);
            this.addInnerElement(titelAndDate, date);

            const buttonsControlList = this.createElement(
                buttonsControlListParams
            );
            this.addInnerElement(itemTop, buttonsControlList);

            const buttonFavorite = this.createElement(buttonFavoriteParams);
            this.addInnerElement(buttonsControlList, buttonFavorite);

            const buttonEdit = this.createElement(buttonEditParams);
            this.addInnerElement(buttonsControlList, buttonEdit);

            const buttonDel = this.createElement(buttonDeleteParams);
            this.addInnerElement(buttonsControlList, buttonDel);

            const textPreview = this.createElement(textPreviewParams);
            this.addInnerElement(listItem, textPreview);
        });
    }
}

// 1. всё это вставить через фрейм или как там...
