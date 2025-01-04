import { data } from "../data.js";


function renderCards(element, year, major) {
    let filteredData = data.filter(d => {
        const sameYear = year ? d.year.includes(parseInt(year)) : true;
        const sameMajor = major ? d.major.includes(major) : true;
        return sameYear && sameMajor;
    })
    if (filteredData.length === 0) {
        element.innerHTML = `<p class="no-results">No results found.</p>`;
        return;
    }
    const cards = filteredData.map(d =>
        {
            return `
               <div class="card">
                   <header class="content-header">
                        <h1>${d.name}</h1>
                        <h2>${d.major.join(", ")}, ${d.year.join(", ")}</h2>
                   </header> 
                   <img src="${d.img}" loading="lazy" alt="Cover Diktat ${d.name}, ${d.major} ${d.year}">
                   <div class="btn-container">
                       <a href="${d.linkDrive}" class="btn drive-btn"><i class="material-symbols-rounded">picture_as_pdf</i> PDF</a>
                       <a href="${d.linkZoom}"  class="btn zoom-btn"><i class="material-symbols-rounded">videocam</i> Zoom</a>
                   </div>
               </div>
            `
        }
    ).join(" ");
    element.innerHTML = `
    <div class="cards-container">
        ${cards}
    </div>
    `;
}

export function renderDiktatAsis(element) {
    const majorElement = document.getElementById("major-option");
    const yearElement = document.getElementById("year-option");
    let year = "";
    let major = "";
    renderCards(element, year, major);
    majorElement.addEventListener("change", e => {
        major = e.target.value;
        renderCards(element, year, major);
        console.log(major);

    })
    yearElement.addEventListener("change", e => {
        year = e.target.value;
        renderCards(element, year, major);
        console.log(year);
    })
}


