export default class Router {
    initialPage: string = "home-page";
    currentHash: string;
    onHashChange: (hash: string) => void;

    constructor(onHashChange: (hash: string) => void) {
        this.currentHash = this.initialPage;
        this.onHashChange = onHashChange;
        this.rout();
    }

    rout() {
        location.replace(`${location.pathname}#` + this.initialPage);
        window.addEventListener("hashchange", () => {
            this.currentHash = window.location.hash.slice(1);
            this.onHashChange(this.currentHash);
            this.updateTitle(this.currentHash);
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

    getCurrentHash(): string {
        return this.currentHash;
    }
}
