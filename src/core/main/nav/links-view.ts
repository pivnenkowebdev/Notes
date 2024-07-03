import { ElementParams } from "../../utilities/types";
import View from "../../utilities/view";

export default class Link extends View {
    constructor(linkParams: ElementParams) {
        super(linkParams);
        this.configureView();
    }

    configureView() {}
}
