import View from "../utilities/view";

export default class HeaderView extends View {
    constructor() {
        const headerListParams = {
            tagName: "header",
            classList: ["header", "redHeader"],
            textContent: "Header",
            id: "header",
        };
        super(headerListParams);
    }
}
