import { ElementParams } from "../../utilities/types";
import View from "../../utilities/view";

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
                input: "search",
            },
            id: "inputSearch",
            eventType: "input",
            callback: () => this.filterCurrentNotes(),
        };

        super(inputSearchParams);
        this.configureView();
    }

    configureView() {}

    filterCurrentNotes() {}
}
