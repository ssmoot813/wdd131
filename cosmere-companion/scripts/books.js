import { books, readingPaths } from "./data.js";

const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");

const booksGrid = document.querySelector("#books-grid");
const detailsPanel = document.querySelector("#book-details");

const bookFilterButtons = document.querySelectorAll(".filter-btn[data-category]");
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

function createBookCard(book) {
    const card = document.createElement("article");
    card.className = "book-card";
    card.id = book.id;

    card.innerHTML = `
        <div class="card-top" aria-hidden="true">✦</div>
        <div class="card-content">
            <h3>${book.title}</h3>
            <p><strong>World:</strong> ${book.world}</p>
            <div class="badge-row">
                <span class="badge">${book.category}</span>
                <span class="badge">${book.level}</span>
            </div>
            <p>${book.description}</p>
            <button class="details-btn" data-id="${book.id}">View Details</button>
        </div>
    `;

    return card;
}

function renderBooks(bookList) {
    booksGrid.innerHTML = "";

    if (bookList.length === 0) {
        booksGrid.innerHTML = `
            <div class="empty-state">
                <h3>No books found</h3>
                <p>Try another filter to explore more Cosmere titles.</p>
            </div>
        `;
        return;
    }

    bookList.forEach((book) => {
        booksGrid.appendChild(createBookCard(book));
    });
}

function updateDetails(bookId) {
    const selectedBook = books.find((book) => book.id === bookId);

    if (!selectedBook) {
        detailsPanel.innerHTML = `
            <h2>Selected Book Details</h2>
            <p>Book details could not be loaded.</p>
        `;
        return;
    }

    detailsPanel.innerHTML = `
        <div class="details-top" aria-hidden="true">✦</div>
        <h2>${selectedBook.title}</h2>
        <p><strong>World:</strong> ${selectedBook.world}</p>
        <div class="badge-row">
            <span class="badge">${selectedBook.category}</span>
            <span class="badge">${selectedBook.level}</span>
        </div>
        <p><strong>Magic System:</strong> ${selectedBook.magic}</p>
        <p><strong>Description:</strong> ${selectedBook.description}</p>
        <p><strong>Why start here?</strong> ${selectedBook.whyStart}</p>
    `;
}

function filterBooks(category) {
    if (category === "all") {
        renderBooks(books);
        return;
    }

    const filteredBooks = books.filter((book) => {
        return book.category === category || book.level === category;
    });

    renderBooks(filteredBooks);
}

function setActiveBookFilter(activeButton) {
    bookFilterButtons.forEach((button) => {
        button.classList.remove("active");
    });

    activeButton.classList.add("active");
}

function handleBookFilterClick(event) {
    const button = event.target.closest(".filter-btn[data-category]");
    if (!button) return;

    setActiveBookFilter(button);
    filterBooks(button.dataset.category);
}

function handleGridClick(event) {
    const detailsButton = event.target.closest(".details-btn");
    if (!detailsButton) return;

    updateDetails(detailsButton.dataset.id);
}

function loadBookFromHash() {
    const hashId = window.location.hash.replace("#", "");
    if (!hashId) return false;

    const matchingBook = books.find((book) => book.id === hashId);
    if (!matchingBook) return false;

    updateDetails(matchingBook.id);
    return true;
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

function setActiveGuideButton(activeButton) {
    guideButtons.forEach((button) => {
        button.classList.remove("active");
    });

    activeButton.classList.add("active");
}

function handleGuideClick(event) {
    const button = event.target.closest(".guide-btn");
    if (!button) return;

    setActiveGuideButton(button);
    updateGuide(button.dataset.choice);
}

function initEvents() {
    navToggle.addEventListener("click", toggleNav);

    siteNav.addEventListener("click", (event) => {
        const navLink = event.target.closest("a");
        if (navLink) closeNav();
    });

    bookFilterButtons.forEach((button) => {
        button.addEventListener("click", handleBookFilterClick);
    });

    guideButtons.forEach((button) => {
        button.addEventListener("click", handleGuideClick);
    });

    booksGrid.addEventListener("click", handleGridClick);

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 980) {
            closeNav();
        }
    });
}

function init() {
    renderBooks(books);

    if (!loadBookFromHash()) {
        updateDetails(books[0].id);
    }

    updateGuide("beginner");
    initEvents();
}

init();