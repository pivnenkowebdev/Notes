import { ElementParams, allNotesParams } from "../../utilities/types";
import View from "../../utilities/view";

const stagesListParams = {
    main: "home-page",
    favorites: "favorites-page",
};

export default class ListNotesView extends View {
    constructor() {
        const listNotesParams: ElementParams = {
            tagName: "ul",
            classList: [],
        };
        super(listNotesParams);
    }

    private cleanWrapper() {
        this.getComponent().innerHTML = "";
    }

    createCurrentList(params: allNotesParams, stage: string) {
        this.cleanWrapper();
        if (stage === stagesListParams.main) {
            console.log(params.favoriteNotes);
            console.log(params.regularNotes);
        } else if (stage === stagesListParams.favorites) {
            console.log(params.favoriteNotes);
        }
    }
}
