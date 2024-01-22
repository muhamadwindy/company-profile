/*
      Ceklist windy dari saran dicoding
      1. Menerapkan tampilan aplikasi yang menarik dan semantic. PASSED
      2. Menerapkan layout yang responsif. PASSED
      4. Terdapat penerapan JavaScript dalam memanipulasi DOM PASSED
      yaitu Memanfaatkan logika seperti looping dalam menampilkan elemen dan konten.
      */

const products = [
  {
    title: "IT Consulting",
    type: "Services",
    description:
      "Our “customer first” philosophy ensures that we provide our clients with “the best IT services and solutions” with the support of professional and experienced personnel in their field.",
    picture: "assets/images/it-consulting.png",
  },
  {
    title: "Loan Origination System",
    type: "Product",
    description:
      "ou can manages the end-to-end steps in the loan process from the application, through underwriting, approval, documentation, pricing, funding, and administration",
    picture: "assets/images/los.svg",
  },
  {
    title: "Document Management System",
    type: "Product",
    description: "Safekeeping of assets made simple and secure.",
    picture: "assets/images/dms.jpg",
  },
  {
    title: "Dedicated Development Team",
    type: "Services",
    description:
      "We provide our clients with a dedicated, customized, and secure team extension model that integrates with your internal development practices, methodologies, and cultures.",
    picture: "assets/images/tim-id.png",
  },
];

const productsContainer = document.querySelector(".container-product");

products.forEach((prdk) => {
  const cardProduct = document.createElement("div");
  cardProduct.setAttribute("class", "card-product");

  const productImageContainer = document.createElement("div");
  productImageContainer.setAttribute("class", "card-product-image");

  const productImage = document.createElement("img");
  productImage.setAttribute("src", prdk.picture);
  productImage.setAttribute("alt", prdk.title);
  productImageContainer.appendChild(productImage);

  const productTitleContainer = document.createElement("div");
  productTitleContainer.setAttribute("class", "card-product-title");

  const productTitle = document.createElement("h3");
  productTitle.innerHTML = prdk.title;
  productTitleContainer.appendChild(productTitle);

  const productType = document.createElement("span");
  productType.setAttribute("class", "badge");
  productType.innerHTML = prdk.type;

  const productDescriptionContainer = document.createElement("div");
  productDescriptionContainer.setAttribute("class", "card-product-description");
  productDescriptionContainer.innerHTML = prdk.description;

  cardProduct.appendChild(productImageContainer);
  cardProduct.appendChild(productTitleContainer);
  cardProduct.appendChild(productType);
  cardProduct.appendChild(productDescriptionContainer);

  productsContainer.appendChild(cardProduct);
});

const form = document.querySelector("#contact");
form.addEventListener("submit", function () {
  e.preventDefault();
  alert("Oke. We will contact you as soon as posible");
});
const toggleMenu = () => {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("show");
};
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
