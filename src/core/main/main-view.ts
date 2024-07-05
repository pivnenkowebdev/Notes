import { ElementParams } from "../utilities/types";
import View from "../utilities/view";
import Nav from "./nav/nav-view";
import HomePage from "./home-page/home-page-view";
import FavoritesPage from "./favorites/favorites-page-view";

const mainParams: ElementParams = {
    tagName: "main",
    classList: ["container"],
};

const sectionControllParams: ElementParams = {
    tagName: "section",
    classList: ["pt-8", "pb-8"],
};

const wrapperListNotesParams: ElementParams = {
    tagName: "section",
    classList: [],
};

export default class Main extends View {
    wrapperListNotes: HTMLElement;
    constructor() {
        super(mainParams);
        this.wrapperListNotes = this.createElement(wrapperListNotesParams);
        this.configureView();
    }

    configureView() {
        const sectionControll = this.createElement(sectionControllParams);
        this.addInnerElement(this.component.getHtmlElement(), sectionControll);

        const nav = new Nav();
        this.addInnerElement(sectionControll, nav);

        this.addInnerElement(
            this.component.getHtmlElement(),
            this.wrapperListNotes
        );
    }

    cleanWrapper() {
        this.wrapperListNotes.innerHTML = "";
    }

    renderCurrentPage(urlPage: string) {
        this.cleanWrapper();
        switch (urlPage) {
            case "home-page": {
                const homePage = new HomePage();
                this.addInnerElement(this.wrapperListNotes, homePage);
                break;
            }
            case "favorites-page": {
                const favoritesPage = new FavoritesPage();
                this.addInnerElement(this.wrapperListNotes, favoritesPage);
                break;
            }
        }
    }
}
