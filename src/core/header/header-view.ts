import { ElementParams } from "../utilities/types";
import View from "../utilities/view";
import NightModeBtnView from "./night-mode-btn/night-mode-btn";

const mainTitleParams: ElementParams = {
    tagName: "h1",
    textContent: "To-Do",
    classList: [
        "text-xl",
        "font-semibold",
        "text-cyan-700",
        "dark:text-gray-50",
        "font-['Roboto_Slab']",
    ],
};

export default class HeaderView extends View {
    constructor() {
        const headerParams: ElementParams = {
            tagName: "header",
            classList: [
                "pt-4",
                "pb-4",
                "flex",
                "justify-between",
                "items-center",
                "border-b-2",
                "border-cyan-700",
                "dark:border-stone-50",
            ],
        };

        super(headerParams);
        this.configureView();
    }

    configureView() {
        const mainTitle = this.createElement(mainTitleParams);
        this.addInnerElement(this.component.getHtmlElement(), mainTitle);

        const nightModeBtn = new NightModeBtnView();
        this.addInnerElement(this.component.getHtmlElement(), nightModeBtn);
    }
}
