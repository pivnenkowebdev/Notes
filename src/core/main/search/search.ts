import { ElementParams } from "../../utilities/types";
import View from "../../utilities/view";
import { checkTrust } from "../../utilities/helper";

export default class Filter extends View {
    constructor() {
        const inputSearchParams: ElementParams = {
            tagName: "input",
            classList: [
                "max-w-md",
                "w-full",
                "py-1",
                "px-2",
                "rounded-md",
                "border-2",
                "border-cyan-600",
                "dark:bg-gray-50",
                "hover:opacity-80",
                "outline-none",
            ],
            attrParams: {
                type: "search",
                placeholder: "Filter...",
            },
            id: "inputSearch",
            eventType: "input",
            callback: () => this.filterCurrentNotes(),
        };

        super(inputSearchParams);
        this.configureView();
    }

    private configureView() {}

    private filterCurrentNotes() {
        const component = this.getComponent();

        if (component instanceof HTMLInputElement) {
            const inputValueLowerCase = component.value.toLowerCase();
            const notes = document.querySelectorAll("[data-note]");

            notes.forEach((note) => {
                const htmlNote = note as HTMLElement;

                const noteTitle = note.querySelector("[data-note-title]");
                const noteText = note.querySelector("[data-note-text]");
                checkTrust(noteTitle);
                checkTrust(noteText);
                const valueTitleLowerCase = noteTitle.innerHTML.toLowerCase();
                const valueTextLowerCase = noteText.innerHTML.toLowerCase();

                if (
                    valueTextLowerCase.indexOf(inputValueLowerCase) != -1 ||
                    valueTitleLowerCase.indexOf(inputValueLowerCase) != -1
                ) {
                    htmlNote.style.display = "block";
                } else {
                    htmlNote.style.display = "none";
                }
            });
        }
    }
}
