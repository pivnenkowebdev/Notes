import { ElementParams } from "../../utilities/types";
import View from "../../utilities/view";
import Nav from "./nav-view";
import NewNoteBtn from "./new-note-btn";

const sectionControllParams: ElementParams = {
    tagName: "section",
    classList: ["pt-8", "pb-12", "flex", "flex-col", "gap-4", "items-center"],
};

export default class ControlElementsView extends View {
    constructor() {
        const mainParams: ElementParams = {
            tagName: "section",
            classList: ["container"],
        };

        super(mainParams);
        this.configureView();
    }

    configureView() {
        const sectionControll = this.createElement(sectionControllParams);
        this.addInnerElement(this.component.getHtmlElement(), sectionControll);

        const nav = new Nav();
        this.addInnerElement(sectionControll, nav);

        const newNoteBtn = new NewNoteBtn();
        this.addInnerElement(sectionControll, newNoteBtn);
    }
}
