export default class Router {
    initialPage: string = "home-page";
    static currentHash: string;
    onHashChange: (hash: string) => void;

    constructor(onHashChange: (hash: string) => void) {
        Router.currentHash = this.initialPage;
        this.onHashChange = onHashChange;
        this.rout();
    }

    rout() {
        location.replace(`${location.pathname}#` + this.initialPage);
        window.addEventListener("hashchange", () => {
            Router.currentHash = window.location.hash.slice(1);
            this.onHashChange(Router.currentHash);
            this.updateTitle(Router.currentHash);
        });
    }

    updateTitle(hash: string) {
        switch (hash) {
            case "home-page": {
                document.title = "Notes | Home";
                break;
            }
            case "favorites-page": {
                document.title = "Notes | Favorites";
                break;
            }
        }
    }

    static getCurrentHash(): string {
        return this.currentHash;
    }
}
