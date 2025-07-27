const total = localStorage.getItem("cartTotal");
if (!total || parseInt(total) === 0) {
  window.location.href = "cart.html"; // Redirect back to cart
}
// Load total from localStorage
const totalDisplay = document.getElementById("checkout-total");
totalDisplay.textContent = total ? "₦" + total : "₦0";
// Load cart items for order summary
const orderItemsList = document.getElementById("order-items");
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

cartItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = ${item.name} – ₦${item.price.toLocaleString()};
  orderItemsList.appendChild(li);
});


// Handle form submission
const form = document.getElementById("checkoutForm");
const thankYouMsg = document.getElementById("thankYouMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const phone = form.querySelector("input[type='tel']").value;
  if (!/^\d{11}$/.test(phone)) {
    alert("Please enter a valid 11-digit phone number.");
    return;
  }

  form.style.display = "none";
  thankYouMsg.style.display = "block";

  localStorage.removeItem("cart");
  localStorage.removeItem("cartTotal");
});
document.addEventListener("DOMContentLoaded", () => {
  const totalElement = document.getElementById("checkout-total");
  const savedTotal = localStorage.getItem("cartTotal");

  if (savedTotal && totalElement) {
    totalElement.textContent = `₦${savedTotal}`;
  }
});