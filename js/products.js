function formatPrice(price) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
}

// Initialize IndexedDB
// let db;
// const request = indexedDB.open("MiniShopDB", 1);

// request.onerror = function (event) {
//   console.error("Database error:", event.target.error);
// };

// request.onupgradeneeded = function (event) {
//   const db = event.target.result;
//   const objectStore = db.createObjectStore("cart", { keyPath: "id" });
//   objectStore.createIndex("id", "id", { unique: true });
// };

// request.onsuccess = function (event) {
//   db = event.target.result;
//   displayProducts();
//   updateCartCount();
// };

function displayProducts() {
  const productsGrid = document.getElementById("products-grid");
  const loadingIndicator = document.getElementById("loading-indicator");

  // Clear loading indicator after 1.5s (simulate network delay)
  setTimeout(() => {
    loadingIndicator.classList.add("hidden");

    // Display products with staggered animation
    ItemsProducts.forEach((product, index) => {
      const card = createProductCard(product);
      card.style.animationDelay = `${index * 0.1}s`;
      productsGrid.appendChild(card);
    });

    // Add event listeners to all add-to-cart buttons
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = parseInt(e.currentTarget.dataset.id);
        const product = ItemsProducts.find((p) => p.id === productId);
        addToCart(product);

        // Add visual feedback
        const icon = e.currentTarget.querySelector("svg");
        icon.classList.add("animate-ping");
        setTimeout(() => {
          icon.classList.remove("animate-ping");
        }, 500);
      });
    });
  }, 1500);
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className =
    "animate-product-card product-card bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group";

  card.innerHTML = `
    <div class="relative pt-[100%] bg-gray-50 overflow-hidden">
      <img src="${product.image}" alt="${product.name}"
           class="absolute top-0 left-0 w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
           loading="lazy">
      
      ${
        product.discount
          ? `
        <span class="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          -${product.discount}%
        </span>
      `
          : ""
      }
    </div>
    
    <div class="p-4">
      <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2">${
        product.name
      }</h3>
      <p class="text-gray-600 text-sm mb-3 line-clamp-3">${
        product.description
      }</p>
      
      <div class="flex items-center justify-between mt-4">
        <div>
          <p class="text-lg font-bold text-gray-900">${formatPrice(
            product.price
          )}</p>
          ${
            product.originalPrice
              ? `
            <p class="text-sm text-gray-400 line-through">
              ${formatPrice(product.originalPrice)}
            </p>
          `
              : ""
          }
        </div>
        
        <button class="add-to-cart flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                data-id="${product.id}">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>
    </div>
  `;

  return card;
}

function addToCart(product) {
  const transaction = db.transaction(["cart"], "readwrite");
  const objectStore = transaction.objectStore("cart");

  const request = objectStore.get(product.id);

  request.onsuccess = function () {
    const data = request.result;

    if (data) {
      // Product exists in cart, update quantity
      data.quantity += 1;
      objectStore.put(data);
    } else {
      // Product not in cart, add new entry
      objectStore.add({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }

    updateCartCount();
  };

  request.onerror = function (event) {
    console.error("Error adding to cart:", event.target.error);
  };
}

function updateCartCount() {
  if (!db) return;

  const transaction = db.transaction(["cart"], "readonly");
  const objectStore = transaction.objectStore("cart");
  const countRequest = objectStore.getAll();

  countRequest.onsuccess = function () {
    const cartItems = countRequest.result;
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    document.querySelectorAll("#cart-count").forEach((el) => {
      el.textContent = totalItems;
    });
  };

  countRequest.onerror = function (event) {
    console.error("Error getting cart count:", event.target.error);
  };
}
