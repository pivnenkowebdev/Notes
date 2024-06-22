import HeaderView from "./header/header-view";
import MainView from "./main/main-view";

export default class App {
    constructor() {}

    insertTemplate() {
        const header = new HeaderView();
        const main = new MainView();
        document.body.append(header.getHtmlElement(), main.getHtmlElement());
    }
}
