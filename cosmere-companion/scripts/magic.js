import { magicSystems } from "./data.js";

const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");
const magicGrid = document.querySelector("#magic-grid");

const modal = document.querySelector("#magic-modal");
const modalBackdrop = document.querySelector("#magic-modal-backdrop");
const modalClose = document.querySelector("#magic-modal-close");
const modalSlide = document.querySelector("#magic-modal-slide");
const modalImageWrapper = document.querySelector(".magic-modal-slide-image");
const modalImage = document.querySelector("#magic-modal-image");
const modalKicker = document.querySelector("#magic-modal-kicker");
const modalTitle = document.querySelector("#magic-modal-title");
const modalDescription = document.querySelector("#magic-modal-description");
const modalCount = document.querySelector("#magic-modal-count");
const prevBtn = document.querySelector("#magic-prev");
const nextBtn = document.querySelector("#magic-next");

let currentSystemIndex = 0;
let currentSlideIndex = 0;
let isAnimating = false;

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

    if (slide.image) {
        modalImage.loading = "lazy";
        modalImage.decoding = "async";
        modalImage.src = slide.image;
        modalImage.alt = slide.title || system.name;
        modalImageWrapper.style.display = "flex";
    } else {
        modalImage.removeAttribute("src");
        modalImage.alt = "";
        modalImageWrapper.style.display = "none";
    }

    modalKicker.textContent = slide.kicker || "";
    modalTitle.textContent = slide.title || system.name;
    modalDescription.textContent = slide.description || "";
    modalCount.textContent = `${currentSlideIndex + 1} / ${slides.length}`;

    prevBtn.disabled = slides.length <= 1;
    nextBtn.disabled = slides.length <= 1;
}

function animateSlideChange(callback) {
    if (isAnimating) return;
    isAnimating = true;

    modalSlide.classList.add("is-transitioning");

    setTimeout(() => {
        callback();
        modalSlide.classList.remove("is-transitioning");
        isAnimating = false;
    }, 180);
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

    animateSlideChange(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateModal();
    });
}

function previousSlide() {
    const system = magicSystems[currentSystemIndex];
    const slides = getSlides(system);

    animateSlideChange(() => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateModal();
    });
}

if (navToggle && siteNav) {
    navToggle.addEventListener("click", toggleNav);

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 980) {
            closeNav();
        }
    });
}

if (magicGrid) {
    magicGrid.addEventListener("click", (event) => {
        const button = event.target.closest(".details-btn");
        if (!button) return;

        const systemIndex = Number(button.dataset.index);
        openModal(systemIndex);
    });
}

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

    if (!modalIsOpen || isAnimating) return;

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