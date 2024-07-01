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
        "dark:bg-gray-50",
    ],
    id: "nightModeBtn",
    eventMode: "click",
    callback: () => {
        ["dark", "dark:bg-gray-900"].forEach((cls) =>
            document.body.classList.toggle(cls)
        );
    },
};

const btnWrapperSpanParams: ElementParams = {
    tagName: "span",
    classList: [
        "w-7",
        "h-7",
        "bg-cover",
        "bg-[url('../../img/sun-icon.svg')]",
        "dark:dark:bg-[url('../../img/moon-icon.svg')]",
    ],
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
