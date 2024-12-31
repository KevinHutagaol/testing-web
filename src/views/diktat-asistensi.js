import AbstractView from "./abstract-view.js";
import { renderDiktatAsis } from "../scripts/render-diktat-asis.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Diktat dan Asistensi");
    }

    async renderHtml(appElement) {
        appElement.innerHTML = `
  <div>
    <main class="main">
        <header>
            <h1>Diktat dan Asistensi</h1>
            <h2>UTS Genap 2025</h2>
            <select name="year-option" id="year-option">
                <option value="" selected disabled hidden>Angkatan</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
            <select name="major-option" id="major-option">
                <option value="" selected disabled hidden>Jurusan</option>
                <option value="Teknik Elektro">Teknik Elektro</option>
                <option value="Teknik Komputer">Teknik Komputer</option>
                <option value="Teknik Biomedik">Teknik Biomedik</option>
            </select>
        </header>
        <div class="content-diktat-asis" id="content-diktat-asis"></div>
    </main>
  </div>
`
        renderDiktatAsis(document.querySelector('#content-diktat-asis'));
    }
}