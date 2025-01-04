import home from './views/home.js';
import diktatAsis from './views/diktat-asistensi.js';
import prokerLain from "./views/proker-lain.js";
import about from "./views/about.js";

const navBar = document.getElementById('top-nav');

const navigatePage = url => {
    history.pushState(null, null, url)
    router();
    if (!navBar.classList.contains('hidden')) {
        navBar.classList.toggle('hidden');
    }
}

const router = async () => {
    const routes =[
        { path: '/', view: home },
        { path: '/diktat-asistensi', view: diktatAsis },
        { path: '/proker-lain', view: prokerLain },
        { path: '/about', view: about },
    ]

    let route = routes.find(route => location.pathname === route.path);
    if (!route) {
        route = routes[0] // could change a 404 page
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

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }


})

window.addEventListener("popstate", router)


document.getElementById('nav-btn').addEventListener('click', e => {
    navBar.classList.toggle('hidden');
})

document.getElementById('overlay').addEventListener('click', e => {
    navBar.classList.toggle('hidden');
})



const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
}

document.querySelectorAll('.toggle-dark-mode').forEach(e => {
    e.addEventListener('click', toggleTheme);
});

const localStorageTheme = localStorage.getItem('theme') || document.documentElement.getAttribute('data-theme');
document.documentElement.setAttribute('data-theme', localStorageTheme);