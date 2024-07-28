import { ElementParams } from "../../utilities/types";
import View from "../../utilities/view";

const linksParams: ElementParams[] = [
    {
        tagName: "a",
        classList: [
            "bg-cyan-600",
            "rounded-lg",
            "py-1",
            "px-3",
            "text-gray-50",
            "text-xl",
            "capitalize",
            "cursor-pointer",
            "dark:text-cyan-700",
            "dark:bg-gray-50",
            "hover:opacity-80",
            "active",
            "outline-none",
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
            "py-1",
            "px-3",
            "text-gray-50",
            "text-xl",
            "capitalize",
            "cursor-pointer",
            "dark:text-cyan-700",
            "dark:bg-gray-50",
            "hover:opacity-80",
            "outline-none",
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
            eventType: "click",
            callback: (event) => this.setCurrentLink(event),
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

    setCurrentLink(event: Event) {
        const currentLink = event.target;
        // избавиться от queryselector
        if (
            currentLink instanceof HTMLAnchorElement &&
            !currentLink.classList.contains("active")
        ) {
            const activeLink = this.component
                .getHtmlElement()
                .querySelector("a.active");
            activeLink?.classList.remove("active");
            currentLink.classList.add("active");
        }
    }
}
