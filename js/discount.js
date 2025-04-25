document.addEventListener("DOMContentLoaded", function () {
  // Get discounted products (last 3 products in array for example)
  const discountedProducts = products.slice(-3);
  const container = document.getElementById("friday-discount-products");

  // Create product cards
  discountedProducts.forEach((product) => {
    const discountPercentage = product.originalPrice
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : 20; // Default 20% if no original price

    const card = `
      <div class="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
        <!-- Discount Badge -->
        <div class="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          ${discountPercentage}% OFF
        </div>
        
        <!-- Product Image -->
        <div class="relative pt-[100%] bg-gray-100 overflow-hidden">
          <img src="${product.image}" 
               alt="${product.name}"
               class="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
               loading="lazy">
        </div>
        
        <!-- Product Info -->
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
            ${product.name}
          </h3>
          
          <!-- Price -->
          <div class="flex items-center mt-2">
            <p class="text-lg font-bold text-red-600">
              ${formatPrice(product.price)}
            </p>
            ${
              product.originalPrice
                ? `
              <p class="text-sm text-gray-400 line-through ml-2">
                ${formatPrice(product.originalPrice)}
              </p>
            `
                : ""
            }
          </div>
          
          <!-- Add to Cart -->
          <button class="add-to-cart w-full mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                  data-id="${product.id}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    `;

    container.innerHTML += card;
  });

  // Simple carousel navigation
  let currentIndex = 0;
  const items = container.children;
  const itemCount = items.length;

  function showItems() {
    Array.from(items).forEach((item, index) => {
      item.style.display =
        index >= currentIndex && index < currentIndex + 3 ? "block" : "none";
    });
  }

  document.querySelector(".carousel-next").addEventListener("click", () => {
    if (currentIndex < itemCount - 3) {
      currentIndex++;
      showItems();
    }
  });

  document.querySelector(".carousel-prev").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      showItems();
    }
  });

  // Initial display
  showItems();
});
