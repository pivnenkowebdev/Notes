import View from "../../utilities/view";
import { ElementParams } from "../../utilities/types";

const btnNightModeListParams: ElementParams = {
    tagName: "button",
    classList: ["night-mode-btn"],
    id: "nightModeBtn",
};

export default class extends View {
    constructor() {
        super(btnNightModeListParams);
    }
}