document.addEventListener("DOMContentLoaded", function () {
  const buyNowButton = document.getElementById("checkout-button");

  if (buyNowButton) {
    buyNowButton.addEventListener("click", function () {
      const quantity = document.getElementById("quantity")
        ? document.getElementById("quantity").value
        : 1;
      const product = {
        name: document.getElementById("product-title").textContent,
        price: document.getElementById("product-price").textContent,
        quantity: quantity,
      };

      const message =
        `Hello! I want to buy:\n\n` +
        `*Product:* ${product.name}\n` +
        `*Quantity:* ${product.quantity}\n` +
        `*Price per unit:* ${product.price}\n` +
        `*Total:* ${formatTotalPrice(product.price, product.quantity)}\n\n` +
        `Please confirm availability.`;

      window.open(
        `https://wa.me/2347069924612?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    });
  }
});

// Helper function to calculate total price
function formatTotalPrice(priceString, quantity) {
  // Extract numeric value from price string (e.g., "₦49,999" -> 49999)
  const numericValue = parseInt(priceString.replace(/[^0-9]/g, "")) * quantity;
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(numericValue);
}
