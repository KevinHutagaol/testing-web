import AbstractView from "./abstract-view.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Akpro IME FTUI')
    }
    async renderHtml(appElement) {
        appElement.innerHTML = `
    <div>
    <main class="main main-main" >
        <div class="main-intro-container intro-container">
            <header class="main-intro intro">
                <h1>Akpro IME FTUI 2025</h1>
                <h2>Akademis dan Keprofesian</h2>
            </header>
        </div>
        <div class="content-main" id="content-main"></div>
    </main>
    </div>     
    `
    }
};

