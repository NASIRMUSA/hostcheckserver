// Format price as Nigerian Naira
function formatPrice(price) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
}

// Initialize IndexedDB connection
let db;
const request = indexedDB.open("MiniShopDB", 1);

request.onerror = function (event) {
  console.error("Database error:", event.target.error);
  document.getElementById("cart-items").innerHTML =
    '<p class="text-red-500">Error loading cart. Please refresh the page.</p>';
};

request.onsuccess = function (event) {
  db = event.target.result;
  displayCartItems();
};

// Display cart items function
function displayCartItems() {
  const transaction = db.transaction(["cart"], "readonly");
  const objectStore = transaction.objectStore("cart");
  const request = objectStore.getAll();

  request.onsuccess = function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    const cart = request.result;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="text-center py-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p class="text-gray-600 mt-2">Your cart is empty</p>
          <a href="products.html" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Continue Shopping
          </a>
        </div>
      `;
      cartTotalElement.textContent = formatPrice(0);
      return;
    }

    let total = 0;
    let totalItems = 0;
    let itemsText = "";

    cartItemsContainer.innerHTML = ""; // Clear previous items

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      totalItems += item.quantity;

      // Build items text for WhatsApp message
      itemsText += `- ${item.name} (${item.quantity} × ${formatPrice(
        item.price
      )})\n`;

      const cartItemElement = document.createElement("div");
      cartItemElement.className =
        "flex justify-between items-center border-b py-4";
      cartItemElement.innerHTML = `
        <div class="flex items-center space-x-4 flex-1">
          <img src="${item.image}" alt="${
        item.name
      }" class="w-16 h-16 object-cover rounded">
          <div class="flex-1">
            <h3 class="font-semibold">${item.name}</h3>
            <p class="text-gray-600">${formatPrice(item.price)}</p>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
            <button class="decrease-quantity text-lg text-gray-600 hover:text-blue-500" data-id="${
              item.id
            }">−</button>
            <span class="quantity font-medium">${item.quantity}</span>
            <button class="increase-quantity text-lg text-gray-600 hover:text-blue-500" data-id="${
              item.id
            }">+</button>
          </div>
          <span class="font-semibold w-24 text-right">${formatPrice(
            itemTotal
          )}</span>
          <button class="remove-item text-red-500 hover:text-red-700" data-id="${
            item.id
          }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      `;

      cartItemsContainer.appendChild(cartItemElement);
    });

    // Display total with better styling
    cartTotalElement.innerHTML = `
      <div class="flex justify-between items-center pt-4 border-t">
        <span class="text-lg font-semibold">Total Items:</span>
        <span class="text-lg">${totalItems}</span>
      </div>
      <div class="flex justify-between items-center pt-2">
        <span class="text-lg font-semibold">Total Price:</span>
        <span class="text-xl font-bold">${formatPrice(total)}</span>
      </div>
      <button id="checkout-button" class="w-full mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
        Proceed to Checkout via WhatsApp
      </button>
    `;

    // Add event listener to checkout button
    document.getElementById("checkout-button").addEventListener("click", () => {
      const whatsappMessage = `Hello! I want to place an order:\n\n${itemsText}\nTotal Items: ${totalItems}\nTotal Price: ${formatPrice(
        total
      )}\n\nPlease confirm availability and payment details.`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(
        `https://wa.me/2347069924612?text=${encodedMessage}`,
        "_blank"
      );
    });

    // Add event listeners to buttons
    addCartEventListeners();
  };

  request.onerror = function (event) {
    console.error("Error loading cart:", event.target.error);
    document.getElementById("cart-items").innerHTML =
      '<p class="text-red-500">Error loading cart items. Please refresh the page.</p>';
  };
}

// [Rest of your existing functions (addCartEventListeners, updateQuantity, removeItem) remain the same]
