import HeaderVie from "./header/header-view";
import MainVie from "./main/main-view";

export default class App {
    constructor() {}

    insertTemplate() {
        const header = new HeaderVie();
        const main = new MainVie();
        document.body.append(header.getHtmlElement(), main.getHtmlElement());
    }
}
