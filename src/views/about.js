import AbstractView from "./abstract-view.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Akpro IME FTUI 2025 - About")
    }
    async renderHtml(appElement) {
        appElement.innerHTML = `
    <div>
        <main class="main">
            <header>
                <h1>Akpro IME FTUI 2024</h1>
                <h2>Akademis dan Keprofesian</h2>
                
            </header>
                <h2>About us (WIP)</h2>
        </main>
    </div>          
    `
    }

}