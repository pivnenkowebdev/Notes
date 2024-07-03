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
        "rounded-full",
        "bg-cyan-600",
        "dark:bg-gray-50",
        "hover:opacity-80",
    ],
    id: "nightModeBtn",
    eventType: "click",
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
    appContainer: HTMLElement = document.body;
    constructor() {
        super(btnNightModeListParams);
        this.configureView();
    }

    toggleNightMode() {
        this.appContainer.classList.toggle("dark");
    }

    configureView() {
        const btnWrapperImg = this.createElement(btnWrapperSpanParams);
        this.addInnerElement(this.component.getHtmlElement(), btnWrapperImg);

        const eventType = btnNightModeListParams.eventType;
        if (eventType) {
            this.component.setListener(
                eventType,
                this.toggleNightMode.bind(this)
            );
        }
    }
}
