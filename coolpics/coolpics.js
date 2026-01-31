document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const siteNav = document.getElementById("site-nav");
const DESKTOP_BREAKPOINT = 1000;

menuBtn.addEventListener("click", () => {
  if (window.innerWidth < DESKTOP_BREAKPOINT) {
    siteNav.classList.toggle("is-open");
  }
});

function handleResize() {
  siteNav.classList.remove("is-open");
}
window.addEventListener("resize", handleResize);
handleResize();

const gallery = document.querySelector(".gallery");
const viewerRoot = document.getElementById("viewer-root");

function viewerTemplate(imageUrl, altText) {
  return `
    <dialog class="viewer">
      <div class="viewer-content">
        <img src="${imageUrl}" alt="${altText}">
        <button class="close-viewer" aria-label="Close viewer">X</button>
      </div>
    </dialog>
  `;
}

function openModal(e) {
  if (e.target.tagName !== "IMG") return;

  const img = e.target;
  const alt = img.getAttribute("alt") || "";
  const full = img.dataset.full;

  viewerRoot.innerHTML = viewerTemplate(full, alt);

  const modal = viewerRoot.querySelector("dialog.viewer");
  const closeButton = modal.querySelector(".close-viewer");
  const modalImg = modal.querySelector("img");

  modalImg.addEventListener("error", () => {
    console.error("Full image failed to load:", modalImg.src);
  });

  modal.showModal();

  closeButton.addEventListener("click", () => modal.close());

  modal.addEventListener("click", (event) => {
    if (!event.target.closest(".viewer-content")) modal.close();
  });

  modal.addEventListener("cancel", (event) => {
    event.preventDefault();
    modal.close();
  });

  modal.addEventListener("close", () => {
    viewerRoot.innerHTML = "";
  });
}

gallery.addEventListener("click", openModal);
