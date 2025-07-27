console.log("script is working");

// Load stored products from localStorage
const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

storedProducts.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;

  const title = document.createElement("h3");
  title.textContent = product.name;

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = product.price;

  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.onclick = function () {
    addToCart(this); // ✅ Important: Use this
  };

  productCard.appendChild(img);
  productCard.appendChild(title);
  productCard.appendChild(price);
  productCard.appendChild(button);

  // Add to the correct section
  if (product.category === "Men") {
    document.getElementById("men-section").appendChild(productCard);
  } else if (product.category === "Women") {
    document.getElementById("women-section").appendChild(productCard);
  } else if (product.category === "Kids") {
    document.getElementById("kids-section").appendChild(productCard);
  }
});

// ✅ Add to Cart function
function addToCart(buttonElement) {
  const card = buttonElement.closest(".product-card");

  const name = card.querySelector("h3").textContent;
  const price = card.querySelector(".price").textContent;
  const image = card.querySelector("img").src;

  const product = {
    name,
    price,
    image
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
}