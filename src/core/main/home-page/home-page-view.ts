import { ElementParams } from "../../utilities/types";
import View from "../../utilities/view";

const homePageParams: ElementParams = {
    tagName: "ul",
    classList: [],
    textContent: "Main",
};

export default class HomePage extends View {
    constructor() {
        super(homePageParams);
        this.configureView();
    }

    configureView() {}
}
