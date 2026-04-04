import { books, worlds } from "./data.js";

const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");
const featuredContainer = document.querySelector("#featured-books");
const worldsContainer = document.querySelector("#worlds-grid");
const recommendationBox = document.querySelector("#recommendation-box");
const preferenceButtons = document.querySelectorAll(".preference-btn");

function toggleNav() {
    if (!siteNav || !navToggle) return;

    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

function closeNav() {
    if (!siteNav || !navToggle) return;

    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
}

function renderWorlds() {
    if (!worldsContainer) return;

    const markup = worlds.map((world) => `
        <article class="world-card">
            <div class="card-content">
                <h3>${world.name}</h3>
                <p><strong>Books:</strong> ${world.books}</p>
                <p><strong>Magic:</strong> ${world.magic}</p>
                <p>${world.summary}</p>
            </div>
        </article>
    `).join("");

    worldsContainer.innerHTML = markup;
}

function renderFeaturedBooks() {
    if (!featuredContainer) return;

    const markup = books
        .filter((book) => book.featured)
        .map((book) => `
            <article class="feature-card">
                <div class="card-top" aria-hidden="true">✦</div>
                <div class="card-content">
                    <h3>${book.title}</h3>
                    <p><strong>World:</strong> ${book.world}</p>
                    <p>${book.description}</p>
                    <a href="books.html#${book.id}" class="card-link">Read more about ${book.title}</a>
                </div>
            </article>
        `)
        .join("");

    featuredContainer.innerHTML = markup;
}

function getRecommendation(choice) {
    switch (choice) {
        case "action":
            return "Start with Mistborn. It is one of the clearest and most exciting entry points into the Cosmere.";
        case "epic":
            return "Start with The Stormlight Archive if you want massive worldbuilding, deep lore, and a long-form fantasy experience. This can then be followed up by The Sunlit Man if you want a more epic and high-stakes story with a familiar cast.";
        case "shorter":
            return "Start with Warbreaker or Tress of the Emerald Sea if you want a more approachable and self-contained first read.";
        case "mystery":
            return "Start with Elantris if you enjoy mystery, political tension, and rediscovering how a magic system works.";
        default:
            return "Explore the Books page to compare titles and choose what fits your style best.";
    }
}

function updateRecommendation(choice) {
    if (!recommendationBox) return;

    recommendationBox.innerHTML = `
        <h3>Your Recommendation</h3>
        <p>${getRecommendation(choice)}</p>
    `;
}

function setActivePreference(activeButton) {
    if (!activeButton || preferenceButtons.length === 0) return;

    preferenceButtons.forEach((button) => {
        button.classList.remove("active");
    });

    activeButton.classList.add("active");
}

function handlePreferenceClick(event) {
    const button = event.target.closest(".preference-btn");
    if (!button) return;

    setActivePreference(button);
    updateRecommendation(button.dataset.choice);
}

function initNavEvents() {
    if (!navToggle || !siteNav) return;

    navToggle.addEventListener("click", toggleNav);

    siteNav.addEventListener("click", (event) => {
        const navLink = event.target.closest("a");
        if (navLink) {
            closeNav();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 980) {
            closeNav();
        }
    });
}

function initPreferenceEvents() {
    if (preferenceButtons.length === 0) return;

    preferenceButtons.forEach((button) => {
        button.addEventListener("click", handlePreferenceClick);
    });
}

function init() {
    renderWorlds();
    renderFeaturedBooks();

    if (recommendationBox) {
        updateRecommendation("action");
    }

    if (preferenceButtons.length > 0) {
        preferenceButtons[0].classList.add("active");
    }

    initNavEvents();
    initPreferenceEvents();
}

init();