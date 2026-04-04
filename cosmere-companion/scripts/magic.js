import { magicSystems } from "./data.js";

const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");
const magicGrid = document.querySelector("#magic-grid");

const modal = document.querySelector("#magic-modal");
const modalBackdrop = document.querySelector("#magic-modal-backdrop");
const modalClose = document.querySelector("#magic-modal-close");
const modalImage = document.querySelector("#magic-modal-image");
const modalKicker = document.querySelector("#magic-modal-kicker");
const modalTitle = document.querySelector("#magic-modal-title");
const modalDescription = document.querySelector("#magic-modal-description");
const modalCount = document.querySelector("#magic-modal-count");
const prevBtn = document.querySelector("#magic-prev");
const nextBtn = document.querySelector("#magic-next");

let currentSystemIndex = 0;
let currentSlideIndex = 0;

function toggleNav() {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}

function closeNav() {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
}

function createMagicCard(system, index) {
    const card = document.createElement("article");
    card.className = "magic-card";
    card.id = system.id;

    card.innerHTML = `
        <div class="card-top">${system.name}</div>
        <div class="card-content">
            <p><strong>Type:</strong> ${system.type}</p>
            <p><strong>World:</strong> ${system.world}</p>
            <button class="details-btn" type="button" data-index="${index}">
                View Details
            </button>
        </div>
    `;

    return card;
}

function renderMagicCards() {
    magicGrid.innerHTML = "";

    magicSystems.forEach((system, index) => {
        const card = createMagicCard(system, index);
        magicGrid.appendChild(card);
    });

    const detailButtons = magicGrid.querySelectorAll(".details-btn");

    detailButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const systemIndex = Number(button.dataset.index);
            openModal(systemIndex);
        });
    });
}

function getSlides(system) {
    if (Array.isArray(system.slides) && system.slides.length > 0) {
        return system.slides;
    }

    return [
        {
            image: "",
            kicker: `${system.world} • ${system.type}`,
            title: system.name,
            description: system.summary
        },
        {
            image: "",
            kicker: `Appears In ${system.appearsIn}`,
            title: `Why ${system.name} Stands Out`,
            description: system.whyInteresting
        }
    ];
}

function updateModal() {
    const system = magicSystems[currentSystemIndex];
    const slides = getSlides(system);
    const slide = slides[currentSlideIndex];

    modalImage.src = slide.image || "";
    modalImage.alt = slide.title || system.name;
    modalKicker.textContent = slide.kicker || "";
    modalTitle.textContent = slide.title || system.name;
    modalDescription.textContent = slide.description || "";
    modalCount.textContent = `${currentSlideIndex + 1} / ${slides.length}`;

    prevBtn.disabled = slides.length <= 1;
    nextBtn.disabled = slides.length <= 1;
}

function openModal(systemIndex) {
    currentSystemIndex = systemIndex;
    currentSlideIndex = 0;

    updateModal();

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

function nextSlide() {
    const system = magicSystems[currentSystemIndex];
    const slides = getSlides(system);

    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateModal();
}

function previousSlide() {
    const system = magicSystems[currentSystemIndex];
    const slides = getSlides(system);

    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateModal();
}

if (navToggle) {
    navToggle.addEventListener("click", toggleNav);
}

window.addEventListener("resize", () => {
    if (window.innerWidth >= 980) {
        closeNav();
    }
});

if (modalClose) {
    modalClose.addEventListener("click", closeModal);
}

if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeModal);
}

if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
}

if (prevBtn) {
    prevBtn.addEventListener("click", previousSlide);
}

document.addEventListener("keydown", (event) => {
    const modalIsOpen = modal && modal.classList.contains("open");

    if (!modalIsOpen) return;

    if (event.key === "Escape") {
        closeModal();
    }

    if (event.key === "ArrowRight") {
        nextSlide();
    }

    if (event.key === "ArrowLeft") {
        previousSlide();
    }
});

renderMagicCards();