import { readingPaths } from "./data.js";

const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");
const guideButtons = document.querySelectorAll(".guide-btn");
const resultPanel = document.querySelector("#guide-result-panel");

function toggleNav() {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

function closeNav() {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
}

function updateGuide(choice) {
    const selectedPath = readingPaths.find((path) => path.id === choice);

    if (!selectedPath) {
        resultPanel.innerHTML = `
            <h2>Recommended Starting Point</h2>
            <p>Guide information could not be loaded.</p>
        `;
        return;
    }

    resultPanel.innerHTML = `
        <div class="details-top" aria-hidden="true">✦</div>
        <h2>${selectedPath.label}</h2>
        <p><strong>Start With:</strong> ${selectedPath.startWith}</p>
        <p>${selectedPath.reason}</p>
    `;
}

function setActiveButton(activeButton) {
    guideButtons.forEach((button) => {
        button.classList.remove("active");
    });

    activeButton.classList.add("active");
}

function handleGuideClick(event) {
    const button = event.target.closest(".guide-btn");
    if (!button) return;

    setActiveButton(button);
    updateGuide(button.dataset.choice);
}

function initEvents() {
    navToggle.addEventListener("click", toggleNav);

    siteNav.addEventListener("click", (event) => {
        const navLink = event.target.closest("a");
        if (navLink) closeNav();
    });

    guideButtons.forEach((button) => {
        button.addEventListener("click", handleGuideClick);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 980) {
            closeNav();
        }
    });
}

function init() {
    updateGuide("beginner");
    initEvents();
}

init();