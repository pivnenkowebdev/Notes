import Creator from "./utilities/creator";

export default class App {
    constructor() {
        this.insertTemplate();
    }

    insertTemplate = () => {
        const headerObj = {
            tagName: "header",
            classList: ["header", "redHeader"],
            textContent: "Header",
            id: 1,
        };

        const header = new Creator(headerObj);

        document.body.append(header.getElement());
    };
}
