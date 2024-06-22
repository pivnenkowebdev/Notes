import HeaderVie from "./header/header-view";

export default class App {
    constructor() {}

    insertTemplate() {
        const header = new HeaderVie();
        document.body.append(header.getHtmlElement());
    }
}
