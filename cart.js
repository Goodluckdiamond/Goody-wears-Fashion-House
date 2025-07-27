console.log("Cart script is working");

// Load cart items from localStorage
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");

let total = 0;

cartItems.forEach((item) => {
  const productCard = document.createElement("div");
  productCard.classList.add("cart-item-card"); // Use specific styling class

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;

  const title = document.createElement("h3");
  title.textContent = item.name;

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = item.price;

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.onclick = function () {
    removeFromCart(item);
  };

  productCard.appendChild(img);
  productCard.appendChild(title);
  productCard.appendChild(price);
  productCard.appendChild(removeBtn);

  cartContainer.appendChild(productCard);

  // Calculate total (extract number from price string like "#20,000")
  const numericPrice = Number(item.price.replace(/[^0-9]/g, ""));
  total += numericPrice;
});

// Show total
totalPriceEl.textContent = `₦${total.toLocaleString()}`;
localStorage.setItem("cartTotal", total.toLocaleString());

// Function to remove item from cart
function removeFromCart(itemToRemove) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = cart.filter(item => item.name !== itemToRemove.name);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  location.reload(); // Refresh to update cart display
}

// Function to clear entire cart
function clearCart() {
  localStorage.removeItem("cart");
  document.getElementById("cart-items").innerHTML = "";
  document.getElementById("total-price").textContent = "₦0";
  alert("Cart cleared!");
}
