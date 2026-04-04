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
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View details for ${book.title}`);
    card.setAttribute("aria-pressed", "false");

    card.innerHTML = `
        <div class="book-cover-frame">
            <img src="images/${book.id}.webp" alt="${book.title} cover" class="book-cover">
            <div class="book-card-overlay">
                <span class="book-card-label">View Details</span>
            </div>
        </div>
        <div class="book-card-body">
            <h3>${book.title}</h3>
            <p class="book-card-world">${book.world}</p>
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

function clearSelectedCards() {
    const cards = booksGrid.querySelectorAll(".book-card");

    cards.forEach((card) => {
        card.classList.remove("selected");
        card.setAttribute("aria-pressed", "false");
    });
}

function setSelectedCard(bookId) {
    const cards = booksGrid.querySelectorAll(".book-card");

    cards.forEach((card) => {
        const isSelected = card.id === bookId;
        card.classList.toggle("selected", isSelected);
        card.setAttribute("aria-pressed", String(isSelected));
    });
}

function updateDetails(bookId) {
    const selectedBook = books.find((book) => book.id === bookId);

    if (!selectedBook) {
        detailsPanel.innerHTML = `
            <h2 id="book-details-heading">Selected Book Details</h2>
            <p>Book details could not be loaded.</p>
        `;
        clearSelectedCards();
        return;
    }

    detailsPanel.innerHTML = `
        <div class="details-top" aria-hidden="true">✦</div>
        <div class="details-content">
            <img src="images/${selectedBook.id}.webp" alt="${selectedBook.title} cover" class="details-cover">
            <div class="details-text">
                <h2 id="book-details-heading">${selectedBook.title}</h2>
                <p><strong>World:</strong> ${selectedBook.world}</p>

                <div class="badge-row">
                    <span class="badge">${selectedBook.category}</span>
                    <span class="badge">${selectedBook.level}</span>
                </div>

                <p><strong>Magic System:</strong> ${selectedBook.magic}</p>
                <p><strong>Description:</strong> ${selectedBook.description}</p>
                <p><strong>Why start here?</strong> ${selectedBook.whyStart}</p>
            </div>
        </div>
    `;

    setSelectedCard(bookId);
}

function filterBooks(category) {
    if (category === "all") {
        renderBooks(books);
        return books;
    }

    const filteredBooks = books.filter((book) => {
        return book.category === category || book.level === category;
    });

    renderBooks(filteredBooks);
    return filteredBooks;
}

function setActiveBookFilter(activeButton) {
    bookFilterButtons.forEach((button) => {
        const isActive = button === activeButton;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

function handleBookFilterClick(event) {
    const button = event.target.closest(".filter-btn[data-category]");
    if (!button) return;

    setActiveBookFilter(button);
    const filteredBooks = filterBooks(button.dataset.category);

    if (filteredBooks.length > 0) {
        updateDetails(filteredBooks[0].id);
    } else {
        detailsPanel.innerHTML = `
            <h2 id="book-details-heading">Selected Book Details</h2>
            <p>No matching book is currently selected.</p>
        `;
        clearSelectedCards();
    }
}

function handleGridClick(event) {
    const card = event.target.closest(".book-card");
    if (!card) return;

    updateDetails(card.id);
}

function handleGridKeydown(event) {
    const card = event.target.closest(".book-card");
    if (!card) return;

    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        updateDetails(card.id);
    }
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
            <h2 id="guide-result-heading">Recommended Starting Point</h2>
            <p>Guide information could not be loaded.</p>
        `;
        return;
    }

    resultPanel.innerHTML = `
        <div class="details-top" aria-hidden="true">✦</div>
        <h2 id="guide-result-heading">${selectedPath.label}</h2>
        <p><strong>Start With:</strong> ${selectedPath.startWith}</p>
        <p>${selectedPath.reason}</p>
    `;
}

function setActiveGuideButton(activeButton) {
    guideButtons.forEach((button) => {
        const isActive = button === activeButton;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
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
        if (navLink) {
            closeNav();
        }
    });

    bookFilterButtons.forEach((button) => {
        button.addEventListener("click", handleBookFilterClick);
    });

    guideButtons.forEach((button) => {
        button.addEventListener("click", handleGuideClick);
    });

    booksGrid.addEventListener("click", handleGridClick);
    booksGrid.addEventListener("keydown", handleGridKeydown);

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 980) {
            closeNav();
        }
    });

    window.addEventListener("hashchange", loadBookFromHash);
}

function init() {
    if (!navToggle || !siteNav || !booksGrid || !detailsPanel || !resultPanel) {
        return;
    }

    renderBooks(books);

    if (!loadBookFromHash() && books.length > 0) {
        updateDetails(books[0].id);
    }

    updateGuide("beginner");

    if (guideButtons.length > 0) {
        setActiveGuideButton(guideButtons[0]);
    }

    initEvents();
}

init();