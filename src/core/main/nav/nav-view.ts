import { ElementParams } from "../../utilities/types";
import View from "../../utilities/view";

const linksParams: ElementParams[] = [
    {
        tagName: "a",
        classList: [
            "bg-cyan-600",
            "rounded-lg",
            "pt-1",
            "pb-1",
            "pl-3",
            "pr-3",
            "text-gray-50",
            "text-xl",
            "capitalize",
            "cursor-pointer",
            "dark:text-cyan-700",
            "dark:bg-gray-50",
            "hover:opacity-80",
        ],
        textContent: "all notes",
        id: "home-page",
        href: "home-page",
    },
    {
        tagName: "a",
        classList: [
            "bg-cyan-600",
            "rounded-lg",
            "pt-1",
            "pb-1",
            "pl-3",
            "pr-3",
            "text-gray-50",
            "text-xl",
            "capitalize",
            "cursor-pointer",
            "dark:text-cyan-700",
            "dark:bg-gray-50",
            "hover:opacity-80",
        ],
        textContent: "favorites",
        id: "favoritesPage",
        href: "favorites-page",
    },
];

export default class Nav extends View {
    constructor() {
        const navParams: ElementParams = {
            tagName: "nav",
            classList: ["flex", "justify-center", "gap-x-6"],
        };

        super(navParams);
        this.configureView();
    }

    configureView() {
        linksParams.forEach((item) => {
            const link = this.createElement(item);
            this.addInnerElement(this.getComponent(), link);
        });
    }
}
