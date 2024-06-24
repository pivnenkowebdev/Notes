import { ElementParams } from "../utilities/types";
import View from "../utilities/view";
// import BTN_NIGHT_MODE from "../header/night-mode-btn/night-mode-btn";

// const btnNightMode = new BTN_NIGHT_MODE();

const headerListParams: ElementParams = {
    tagName: "header",
    classList: ["header"],
};

// const containerListParams: ElementParams = {
//     tagName: "div",
//     classList: ["container"],
// };

// const contentListParams: ElementParams = {
//     tagName: "div",
//     classList: ["header__content"],
// };

export default class HeaderView extends View {
    constructor() {
        super(headerListParams);
    }
}
