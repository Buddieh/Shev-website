// Renders the product grid and product page from window.PRODUCTS.

(function () {
  const MARK =
    '<svg viewBox="0 0 40 48" fill="none" stroke="currentColor" stroke-width="1.4">' +
    '<rect x="11" y="2" width="18" height="8"/><rect x="3" y="10" width="34" height="14"/>' +
    '<rect x="11" y="24" width="18" height="7"/><rect x="14" y="31" width="12" height="15"/></svg>';

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // A marked stand-in for text we don't have yet.
  const ph = (value, label) =>
    value ? esc(value) : `<span class="ph" title="Placeholder">${esc(label)}</span>`;

  const imgPlaceholder = (label) =>
    `<div class="placeholder" role="img" aria-label="Image placeholder">${MARK}<span>${esc(label)}</span></div>`;

  const products = window.PRODUCTS || [];

  // ---- Home grid ----
  const grid = document.querySelector("[data-product-grid]");
  if (grid) {
    grid.innerHTML = products
      .map((p, i) => {
        const n = String(i + 1).padStart(2, "0");
        const href = p.cover ? `product.html?p=${encodeURIComponent(p.slug)}` : null;
        const media = p.cover
          ? `<img src="${p.cover}" alt="${esc(p.name)} ${esc(p.type)}" loading="lazy" width="1200" height="1600">`
          : imgPlaceholder("Product photo · 1600 × 2000");
        const inner = `
          <div class="card-media">${media}</div>
          <div class="card-meta">
            <span>${n} — ${ph(p.name, "Lamp name")}</span>
            <span class="price">${p.cover ? ph(p.price, "Price") : '<span class="tag">' + esc(p.type) + "</span>"}</span>
          </div>`;
        return href
          ? `<a class="card" href="${href}">${inner}</a>`
          : `<div class="card" aria-disabled="true">${inner}</div>`;
      })
      .join("");
  }

  // ---- Product page ----
  const page = document.querySelector("[data-product-page]");
  if (page) {
    const slug = new URLSearchParams(location.search).get("p") || "miyan";
    const p = products.find((x) => x.slug === slug && x.cover) || products[0];
    document.title = `${p.name} — ${document.title}`;

    const images = p.images && p.images.length ? p.images : [p.cover];
    const desc = p.descriptionIsDraft
      ? `<span class="ph" title="Drafted from the photos — please review">${esc(p.description)}</span>`
      : ph(p.description, "Two or three sentences about the lamp.");

    page.innerHTML = `
      <div class="gallery">
        <div class="gallery-main tiered"><img src="${images[0]}" alt="${esc(p.name)}" width="1200" height="1600"></div>
        <div class="thumbs">
          ${images
            .map(
              (src, i) =>
                `<button type="button" data-src="${src}" aria-label="Show image ${i + 1}" ${i === 0 ? 'aria-current="true"' : ""}>
                   <img src="${src}" alt="" loading="lazy"></button>`
            )
            .join("")}
        </div>
      </div>
      <div class="product-info">
        <p class="eyebrow">${esc(p.type)}</p>
        <h1>${esc(p.name)}</h1>
        <p class="price">${ph(p.price, "Price")}</p>
        <p class="desc">${desc}</p>
        <dl class="specs">
          <div><dt>Size</dt><dd>${ph(p.size, "H — × W — × D — cm")}</dd></div>
          <div><dt>Material</dt><dd>${ph(p.material, "Material and finish")}</dd></div>
          <div><dt>Light</dt><dd>${ph(p.light, "Bulb type, cable length")}</dd></div>
        </dl>
        <div class="product-actions">
          <a class="btn solid" href="contact.html?product=${encodeURIComponent(p.name)}#inquiry">Request a quote <span class="arrow">→</span></a>
          <a class="btn" href="contact.html#channels">Ask a question</a>
        </div>
        <a class="back" href="index.html#collection">← All lamps</a>
      </div>`;

    const main = page.querySelector(".gallery-main img");
    page.querySelectorAll(".thumbs button").forEach((b) =>
      b.addEventListener("click", () => {
        main.src = b.dataset.src;
        page.querySelectorAll(".thumbs button").forEach((x) => x.removeAttribute("aria-current"));
        b.setAttribute("aria-current", "true");
      })
    );
  }

  // ---- Contact: prefill product from "Request a quote" ----
  const productField = document.querySelector("[data-product-field]");
  if (productField) {
    const wanted = new URLSearchParams(location.search).get("product");
    productField.innerHTML =
      '<option value="">General inquiry</option>' +
      products
        .filter((p) => p.cover)
        .map((p) => `<option ${p.name === wanted ? "selected" : ""}>${esc(p.name)}</option>`)
        .join("");
  }
})();
