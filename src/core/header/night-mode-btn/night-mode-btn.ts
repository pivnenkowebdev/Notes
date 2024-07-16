import View from "../../utilities/view";
import { ElementParams } from "../../utilities/types";

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

const bodyClasslist: string[] = ["dark", "bg-gray-900"];

export default class NightModeBtnView extends View {
    appContainer: HTMLElement = document.body;
    constructor() {
        const btnNightModeListParams: ElementParams = {
            tagName: "button",
            classList: [
                "w-10",
                "h-10",
                "flex",
                "justify-center",
                "items-center",
                "rounded-full",
                "bg-cyan-600",
                "dark:bg-gray-50",
                "hover:opacity-80",
            ],
            id: "nightModeBtn",
            eventType: "click",
            callback: () => this.toggleNightMode(),
        };

        super(btnNightModeListParams);
        this.configureView();
    }

    configureView() {
        const btnWrapperImg = this.createElement(btnWrapperSpanParams);
        this.addInnerElement(this.component.getHtmlElement(), btnWrapperImg);
    }

    toggleNightMode() {
        bodyClasslist.forEach((className) => {
            this.appContainer.classList.toggle(className);
        });
    }
}
