import AbstractView from "./abstract-view.js";
import { dataProker } from "../data.js";


const prokerHtmlSection = (dataProker) => {
    let proker = dataProker.map((item) => {
        let prokerCards = item.cards.map(card => {
            return `
                    <a class="card proker-card" href="${card.href}" ${card.samePage ? 'data-link' : ''}>
                        <img class="proker-card-img" src="${card.img}" alt="${card.imgAlt}">
                        <h2>${card.title}<i class="material-symbols-rounded">chevron_forward</i></h2>
                        <p>${card.description}</p>
                    </a>  
            `
        }).join(" ");


        return ` 
            <div class="proker">
                <h2>${item.title}</h2>
                <div class="proker-content-container">
                    <p class="proker-description">${item.description}</p>
                    <div class="proker-cards">${prokerCards}</div>
                </div>
                <div class="scroll-btn-container">
                    <button class="scroll-btn scroll-btn-left" id="scroll-btn-left"><i class="material-symbols-rounded">chevron_backward</i></button>
                    <button class="scroll-btn scroll-btn-right" id="scroll-btn-right"><i class="material-symbols-rounded">chevron_forward</i></button>
                </div>
            </div>
        `
    }).join(' ')
    return ` 
    <section class="proker-container"> ${proker} </section>
    `
}

const prokerHtml = prokerHtmlSection(dataProker);

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Akpro IME FTUI')
    }

    async renderHtml(appElement) {
        appElement.innerHTML = `
    <main class="main main-main" >
        <div class="main-intro-container intro-container">
            <header class="main-intro intro">
                <h1>Akpro IME FTUI 2025</h1>
                <h2>Akademis dan Keprofesian</h2>
            </header>
        </div>
        <div class="content-main" id="content-main">
            <section class="proker-container"> ${prokerHtml} </section>
        </div>
    </main>
    `
    }
};
