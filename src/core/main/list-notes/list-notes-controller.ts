import ListNotesView from "./list-notes-view";
import DataHandler from "../../utilities/data-handler";
import { checkTrust } from "../../utilities/helper";

export default class ListNotesController {
    listNotesView: ListNotesView;

    constructor() {
        this.listNotesView = new ListNotesView();
    }

    setCurrentPage(urlPage: string) {
        const currentPageLink = urlPage;
        const currentData = DataHandler.initialStorage();
        checkTrust(currentPageLink);
        this.listNotesView.createCurrentList(currentData, currentPageLink);
    }
}
