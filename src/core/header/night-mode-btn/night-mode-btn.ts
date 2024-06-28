import View from "../../utilities/view";
import { ElementParams } from "../../utilities/types";

const btnNightModeListParams: ElementParams = {
    tagName: "button",
    classList: ["night-mode-btn"],
    id: "nightModeBtn",
    eventMode: "click",
    callback: () => {
        console.log("Night mode button clicked!");
    },
};

export default class NightModeBtnView extends View {
    constructor() {
        super(btnNightModeListParams);
        console.log(this.component);
    }
}
