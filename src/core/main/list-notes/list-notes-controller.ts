import ListNotesView from "./list-notes-view";
import DataHandler from "../../utilities/data-handler";
import { checkTrust } from "../../utilities/helper";

export default class ListNotesController {
    listNotesView: ListNotesView;

    constructor() {
        this.listNotesView = new ListNotesView();
    }

    static getCurrentData() {
        const actuallyData = DataHandler.initialStorage();
        checkTrust(actuallyData);
        return actuallyData;
    }

    setCurrentPage(urlPage: string) {
        this.listNotesView.createCurrentList(
            ListNotesController.getCurrentData(),
            urlPage
        );
    }

    getRender() {
        return this.listNotesView.getComponent();
    }
}
