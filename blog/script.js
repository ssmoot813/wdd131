function starsToAria(stars) {
    const count = (stars.match(/[⭐★]/g) || []).length;
    return `Rating ${count} out of 5`;
}

function renderPost(article) {
    return `
    <article class="post">
      <div class="post-grid">
        <aside class="meta" aria-label="Book details">
          <p class="meta-item date">${article.date}</p>
          <p class="meta-item age">${article.ages}</p>
          <p class="meta-item genre">${article.genre}</p>
          <p class="meta-item stars" aria-label="${starsToAria(article.stars)}">
            ${article.stars}
          </p>
        </aside>

        <section class="content" aria-label="Book review">
          <h2 class="book-title">${article.title}</h2>

          <img class="cover"
               src="${article.imgSrc}"
               alt="${article.imgAlt}"
               width="220"
               height="330"
               loading="lazy" />

          <p class="blurb">${article.description}</p>
        </section>
      </div>
    </article>
  `;
}

function renderPosts(list) {
    const container = document.getElementById("posts");
    if (!container) return;

    container.innerHTML = list.map(renderPost).join("");
}

renderPosts(articles);
