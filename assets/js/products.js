// Product catalogue. Add a lamp by adding an entry here; the home grid and
// product page both read from this list. Fields left as `null` render as
// marked placeholders until filled in.

window.PRODUCTS = [
  {
    slug: "miyan",
    name: "Miyan",
    type: "Table lamp",
    price: null,                       // e.g. "€ 420"
    size: null,                        // e.g. "H 38 × W 26 × D 26 cm"
    material: null,                    // e.g. "Powder-coated aluminium"
    description:
      "Four square tiers, stacked and offset, so the light escapes only " +
      "through the gaps between them. Switched off it reads as a quiet " +
      "white sculpture; switched on, each layer gains a thin warm edge.",
    descriptionIsDraft: true,          // drafted from the photos — please review
    cover: "assets/img/miyan/img_6239.jpg",
    images: [
      "assets/img/miyan/img_6239.jpg",
      "assets/img/miyan/img_6294.jpg",
      "assets/img/miyan/img_6285.jpg",
      "assets/img/miyan/img_6268.jpg",
      "assets/img/miyan/img_6279.jpg",
      "assets/img/miyan/img_6291.jpg",
      "assets/img/miyan/img_6245.jpg",
      "assets/img/miyan/img_6259.jpg"
    ]
  },
  { slug: "lamp-02", name: null, type: "Coming soon" },
  { slug: "lamp-03", name: null, type: "Coming soon" },
  { slug: "lamp-04", name: null, type: "Coming soon" },
  { slug: "lamp-05", name: null, type: "Coming soon" },
  { slug: "lamp-06", name: null, type: "Coming soon" }
];
