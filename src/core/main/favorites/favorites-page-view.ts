import { ElementParams } from "../../utilities/types";
import View from "../../utilities/view";

const favoritesPageParams: ElementParams = {
    tagName: "ul",
    classList: [],
    textContent: "Favorites",
};

export default class FavoritesPage extends View {
    constructor() {
        super(favoritesPageParams);
        this.configureView();
    }

    configureView() {}
}
