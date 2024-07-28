import { ElementParams } from "../../utilities/types";
import View from "../../utilities/view";

const mainTestParams: ElementParams = {
    tagName: "div",
    textContent: "main",
    classList: [],
};

const favoriteTestParams: ElementParams = {
    tagName: "div",
    textContent: "favorite",
    classList: [],
};

export default class ListNotesView extends View {
    constructor() {
        const listNotesParams: ElementParams = {
            tagName: "ul",
            classList: [],
        };
        super(listNotesParams);
    }

    cleanWrapper() {
        this.getComponent().innerHTML = "";
    }

    renderCurrentPage(urlPage: string) {
        this.cleanWrapper();
        switch (urlPage) {
            case "home-page": {
                this.addInnerElement(
                    this.getComponent(),
                    this.createElement(mainTestParams)
                );
                break;
            }
            case "favorites-page": {
                this.addInnerElement(
                    this.getComponent(),
                    this.createElement(favoriteTestParams)
                );
                break;
            }
        }
    }
}
