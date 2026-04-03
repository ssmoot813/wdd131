import { magicSystems } from "./data.js";

const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");
const magicGrid = document.querySelector("#magic-grid");
const detailsPanel = document.querySelector("#magic-details-panel");

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

function createMagicCard(system) {
    const card = document.createElement("article");
    card.className = "magic-card";
    card.id = system.id;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View details for ${system.name}`);
    card.setAttribute("aria-pressed", "false");

    card.innerHTML = `
        <div class="card-top" aria-hidden="true">✧</div>
        <div class="card-content">
            <h3>${system.name}</h3>
            <p><strong>World:</strong> ${system.world}</p>
            <div class="badge-row">
                <span class="badge">${system.type}</span>
            </div>
            <p>${system.summary}</p>
            <button class="details-btn" data-id="${system.id}" type="button">View Details</button>
        </div>
    `;

    return card;
}

function renderMagicSystems() {
    magicGrid.innerHTML = "";

    magicSystems.forEach((system) => {
        magicGrid.appendChild(createMagicCard(system));
    });
}

function clearSelectedCards() {
    const cards = magicGrid.querySelectorAll(".magic-card");

    cards.forEach((card) => {
        card.classList.remove("selected");
        card.setAttribute("aria-pressed", "false");
    });
}

function setSelectedCard(systemId) {
    const cards = magicGrid.querySelectorAll(".magic-card");

    cards.forEach((card) => {
        const isSelected = card.id === systemId;
        card.classList.toggle("selected", isSelected);
        card.setAttribute("aria-pressed", String(isSelected));
    });
}

function updateDetails(systemId) {
    const selectedSystem = magicSystems.find((system) => system.id === systemId);

    if (!selectedSystem) {
        detailsPanel.innerHTML = `
            <h2 id="magic-details-heading">Selected Magic Details</h2>
            <p>Magic system details could not be loaded.</p>
        `;
        clearSelectedCards();
        return;
    }

    detailsPanel.innerHTML = `
        <div class="details-top" aria-hidden="true">✧</div>
        <h2 id="magic-details-heading">${selectedSystem.name}</h2>
        <p><strong>World:</strong> ${selectedSystem.world}</p>
        <p><strong>Appears In:</strong> ${selectedSystem.appearsIn}</p>
        <div class="badge-row">
            <span class="badge">${selectedSystem.type}</span>
        </div>
        <p><strong>Summary:</strong> ${selectedSystem.summary}</p>
        <p><strong>Why It Stands Out:</strong> ${selectedSystem.whyInteresting}</p>
    `;

    setSelectedCard(systemId);
}

function handleGridClick(event) {
    const detailsButton = event.target.closest(".details-btn");
    const card = event.target.closest(".magic-card");

    if (detailsButton) {
        updateDetails(detailsButton.dataset.id);
        return;
    }

    if (card) {
        updateDetails(card.id);
    }
}

function handleGridKeydown(event) {
    const card = event.target.closest(".magic-card");
    if (!card) return;

    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        updateDetails(card.id);
    }
}

function loadMagicFromHash() {
    const hashId = window.location.hash.replace("#", "");
    if (!hashId) return false;

    const matchingSystem = magicSystems.find((system) => system.id === hashId);
    if (!matchingSystem) return false;

    updateDetails(matchingSystem.id);
    return true;
}

function initEvents() {
    navToggle.addEventListener("click", toggleNav);

    siteNav.addEventListener("click", (event) => {
        const navLink = event.target.closest("a");
        if (navLink) {
            closeNav();
        }
    });

    magicGrid.addEventListener("click", handleGridClick);
    magicGrid.addEventListener("keydown", handleGridKeydown);

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 980) {
            closeNav();
        }
    });

    window.addEventListener("hashchange", loadMagicFromHash);
}

function init() {
    if (!magicGrid || !detailsPanel || !navToggle || !siteNav) {
        return;
    }

    renderMagicSystems();

    if (!loadMagicFromHash() && magicSystems.length > 0) {
        updateDetails(magicSystems[0].id);
    }

    initEvents();
}

init();