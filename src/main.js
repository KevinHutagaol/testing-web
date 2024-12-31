import home from './views/home.js';
import diktatAsis from './views/diktat-asistensi.js';
import prokerLain from "./views/proker-lain.js";

const navigatePage = url => {
    history.pushState(null, null, url)
    router();
}

const router = async () => {
    const routes =[
        { path: '/', view: home },
        { path: '/diktat-asistensi', view: diktatAsis },
        { path: '/proker-lain', view: prokerLain },
    ]

    let route = routes.find(route => location.pathname === route.path);
    if (!route) {
        route = routes[0]
    }

    const view = new route.view()
    await view.renderHtml(document.querySelector('#app'))
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        const link = e.target.closest("[data-link]");
        if (link) {
            e.preventDefault();
            navigatePage(link.href);
        }
    });
    router();
})

window.addEventListener("popstate", router)


document.getElementById('nav-btn').addEventListener('click', e => {
    document.getElementById('top-nav').classList.toggle('hidden');
    document.querySelector('.header-top').style.backgroundColor = 'rgba(65, 141, 237, 1)'
})