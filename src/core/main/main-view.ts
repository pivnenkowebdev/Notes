import { ElementParams } from "../utilities/types";
import View from "../utilities/view";
import Nav from "./nav/nav";

const mainParams: ElementParams = {
    tagName: "main",
    classList: ["container"],
};

const sectionControllParams: ElementParams = {
    tagName: "section",
    classList: ["pt-8", "pb-8"],
};

export default class Main extends View {
    constructor() {
        super(mainParams);
        this.configureView();
    }

    configureView() {
        const sectionControll = this.createElement(sectionControllParams);
        this.addInnerElement(this.component.getHtmlElement(), sectionControll);

        const nav = new Nav();
        this.addInnerElement(sectionControll, nav);
    }
}
