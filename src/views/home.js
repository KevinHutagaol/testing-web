import AbstractView from "./abstract-view.js";
import { dataProker } from "../data.js";


const prokerHtmlSection = (dataProker) => {
    let proker = dataProker.map((item, i) => {
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
            <div class="proker" data-index="proker-${i}">
                <h2>${item.title}</h2>
                <div class="proker-content-container">
                    <p class="proker-description">${item.description}</p>
                    <div class="proker-cards">${prokerCards}</div>
                </div>
                <div class="scroll-btn-container">
                    <button class="scroll-btn scroll-btn-left" data-index="proker-${i}"><i class="material-symbols-rounded">arrow_back</i></button>
                    <button class="scroll-btn scroll-btn-right" data-index="proker-${i}"><i class="material-symbols-rounded">arrow_forward</i></button>
                </div>
            </div>
        `
    }).join(' ')
    return ` 
    <section class="proker-container"> ${proker} </section>
    `
}

const prokerHtml = prokerHtmlSection(dataProker);

const scrollCards = (e) => {
    let target = e.target.closest('.scroll-btn');
    if (!target) {
        return null;
    }

    let prokerIndex = target.getAttribute('data-index');
    if (!prokerIndex) {
        return null;
    }

    let prokerSelected = document.querySelector(`.proker[data-index=${prokerIndex}]`);
    if (!prokerSelected) {
        return null;
    }

    let prokerCardsContainer = prokerSelected.querySelector('.proker-content-container');
    if (target.classList.contains('scroll-btn-left')) {
        prokerCardsContainer.scrollBy({
            behavior: 'smooth',
            left: -300,
        });
    }

    if (target.classList.contains('scroll-btn-right')) {
        prokerCardsContainer.scrollBy({
            behavior: 'smooth',
            left: 300,
        })
    }
}

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
        document.querySelector('.proker-container').addEventListener('click', scrollCards);
    }
};
