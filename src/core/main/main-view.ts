import View from "../utilities/view";

export default class MainView extends View {
    constructor() {
        const mainListParams = {
            tagName: "main",
            classList: ["main"],
            textContent: "Main",
            id: "main",
        };
        super(mainListParams);
    }
}
