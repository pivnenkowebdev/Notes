import { ElementParams, allNotesParams, DataNote } from "../../utilities/types";
import View from "../../utilities/view";

const stagesListParams = {
    main: "home-page",
    favorites: "favorites-page",
};

const listItemParams: ElementParams = {
    tagName: "li",
    classList: ["border-cyan-700", "border-2", "py-1", "px-3", "rounded-md"],
    attrParams: {
        "data-note": "",
    },
};

const itemTopParams: ElementParams = {
    tagName: "div",
    classList: ["flex", "justify-between", "items-center", "flex-wrap"],
};

const controllAndDateWrapperParams: ElementParams = {
    tagName: "div",
    classList: [
        "flex",
        "gap-2",
        "items-center",
        "justify-between",
        "flex-wrap",
        "max-w-[300px]",
        "w-full",
    ],
};

const titleParams: ElementParams = {
    tagName: "p",
    classList: [
        "text-2xl",
        "font-medium",
        "text-cyan-600",
        "max-w-[400px]",
        "text-ellipsis",
        "overflow-hidden",
    ],
    attrParams: {
        "data-note-title": "",
    },
};

const dateParams: ElementParams = {
    tagName: "p",
    classList: ["text-stone-400"],
};

const buttonsControlListParams: ElementParams = {
    tagName: "div",
    classList: ["flex", "gap-1", "items-center", "shrink-0"],
};

const wrapperFakeCheckboxParams: ElementParams = {
    tagName: "label",
    classList: [],
};

const realCheckboxParams = {
    tagName: "input",
    classList: [
        "w-0",
        "h-0",
        "opacity-0",
        "absolute",
        "top-0",
        "left-0",
        "z-[-1]",
    ],
    attrParams: {
        type: "checkbox",
        name: "favorite",
    },
};

const fakeCheckboxParams = {
    tagName: "span",
    classList: [
        "block",
        "w-6",
        "h-6",
        "relative",
        "cursor-pointer",
        "before:content-['']",
        "before:block",
        "before:absolute",
        "before:top-2/4",
        "before:left-2/4",
        "before:w-5",
        "before:h-5",
        "before:translate-y-[-50%]",
        "before:translate-x-[-50%]",
        "before:bg-cover",
        "favoriteBtn",
    ],
    attrParams: {
        "data-controll": "check",
    },
};

const buttonEditParams: ElementParams = {
    tagName: "button",
    classList: ["w-6", "h-6", "bg-[url('../../img/edit-btn.svg')]", "bg-cover"],
    attrParams: {
        "data-controll": "edit",
    },
};

const buttonDeleteParams: ElementParams = {
    tagName: "button",
    classList: ["w-6", "h-6", "bg-[url('../../img/trash-btn.svg')]"],
    attrParams: {
        "data-action": "remove",
    },
};

const textPreviewParams: ElementParams = {
    tagName: "p",
    classList: [
        "text-ellipsis",
        "overflow-hidden",
        "text-base",
        "font-medium",
        "text-stone-600",
    ],
    attrParams: {
        "data-note-text": "",
    },
};

export default class ListNotesView extends View {
    constructor() {
        const listNotesParams: ElementParams = {
            tagName: "ul",
            classList: [
                "max-w-[900px]",
                "mx-auto",
                "max-h-[540px]",
                "overflow-auto",
                "flex",
                "flex-col",
                "gap-5",
                "scrollbar",
                "pr-1",
            ],
            id: "list",
        };
        super(listNotesParams);
    }

    private createNoteItem(listNotes: DataNote[]): DocumentFragment {
        const fragment = document.createDocumentFragment();

        listNotes.forEach((item) => {
            const listItem = this.createElement(listItemParams);
            listItem.setAttribute("id", String(item.id));

            const itemTop = this.createElement(itemTopParams);
            const controllAndDate = this.createElement(
                controllAndDateWrapperParams
            );

            const title = this.createElement(titleParams);
            title.textContent = item.title;

            const date = this.createElement(dateParams);
            date.textContent = this.formatterDateAndString(item);

            const buttonsControlList = this.createElement(
                buttonsControlListParams
            );

            const buttonFavorite = this.createElement(
                wrapperFakeCheckboxParams
            );

            const realInput = this.createElement(realCheckboxParams);
            if (item.isFavorite) {
                realInput.setAttribute("checked", "");
            }

            const fakeInput = this.createElement(fakeCheckboxParams);
            const buttonEdit = this.createElement(buttonEditParams);
            const buttonDel = this.createElement(buttonDeleteParams);

            const textPreview = this.createElement(textPreviewParams);
            textPreview.innerText = item.text;

            this.addInnerElement(itemTop, title);
            this.addInnerElement(itemTop, controllAndDate);
            this.addInnerElement(controllAndDate, date);
            this.addInnerElement(controllAndDate, buttonsControlList);
            this.addInnerElement(buttonsControlList, buttonFavorite);
            this.addInnerElement(buttonFavorite, realInput);
            this.addInnerElement(buttonFavorite, fakeInput);
            this.addInnerElement(buttonsControlList, buttonEdit);
            this.addInnerElement(buttonsControlList, buttonDel);
            this.addInnerElement(listItem, itemTop);
            this.addInnerElement(listItem, textPreview);

            fragment.prepend(listItem);
        });

        return fragment;
    }

    private renderCurrentList(items: DocumentFragment) {
        const list = document.querySelector("#list");

        if (list) {
            list.appendChild(items);
        }
    }

    private clearRender() {
        const list = document.querySelector("#list");
        if (list) {
            list.innerHTML = "";
        }
    }

    private formatterDateAndString(noteObj: DataNote) {
        const status = noteObj.changed;
        let titleForDate: string;
        if (status) {
            titleForDate = "Changed";
        } else {
            titleForDate = "Created";
        }
        const [currentDate, currentTime] = noteObj.date.split(", ");
        const doneString = `${titleForDate} ${currentDate} at ${currentTime}`;
        return doneString;
    }

    createCurrentList(params: allNotesParams, stage: string) {
        this.clearRender();
        if (stage === stagesListParams.main) {
            const favoritesList = this.createNoteItem(params.favoriteNotes);
            const regularList = this.createNoteItem(params.regularNotes);

            this.renderCurrentList(favoritesList);
            this.renderCurrentList(regularList);
        } else if (stage === stagesListParams.favorites) {
            const favoritesList = this.createNoteItem(params.favoriteNotes);
            this.renderCurrentList(favoritesList);
        }
    }
}
