import View from "../../utilities/view";
import { ElementParams } from "../../utilities/types";

const btnNightModeListParams: ElementParams = {
    tagName: "button",
    classList: [
        "w-10",
        "h-10",
        "flex",
        "justify-center",
        "items-center",
        "bg-cyan-600",
        "rounded-full",
    ],
    id: "nightModeBtn",
    eventMode: "click",
    callback: () => {
        console.log("Night mode button clicked!");
    },
};

const btnWrapperSpanParams: ElementParams = {
    tagName: "span",
    classList: ["w-7", "h-7", "bg-cover", "bg-[url('../../img/sun-icon.svg')]"],
};

export default class NightModeBtnView extends View {
    constructor() {
        super(btnNightModeListParams);
        this.configureView();
    }

    configureView() {
        const btnWrapperImg = this.createElement(btnWrapperSpanParams);
        this.addInnerElement(this.component.getHtmlElement(), btnWrapperImg);
    }
}
