import { ElementParams } from "../../utilities/types";
import View from "../../utilities/view";

const mainParams: ElementParams = {
    tagName: "main",
    classList: ["container"],
};

const sectionControll: ElementParams = {
    tagName: "section",
    classList: ["pt-8", "pb-8"],
};

export default class Main extends View {
    constructor() {
        super(mainParams);
        this.configureView();
    }

    configureView() {
        const container = this.createElement(sectionControll);
        this.addInnerElement(this.component.getHtmlElement(), container);
    }
}
