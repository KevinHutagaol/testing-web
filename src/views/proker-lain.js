import AbstractView from "./abstract-view.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('lainnya(WIP)')
    }
    async renderHtml(appElement) {
        appElement.innerHTML = `
    <main class="main main-diktat-asis" >
        <div class="intro-container">
            <header class="intro">
                <h1>Akpro IME FTUI 2025</h1>
                <h2>Proker Lain (WIP)</h2>
            </header>
        </div>
            <p style="font-size: 3rem; text-align: center; display: block; width: 100%">WIP</p>
    </main>       
    `
    }
}