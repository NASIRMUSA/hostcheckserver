document.addEventListener("DOMContentLoaded", function () {
  if (typeof products !== "undefined" && products.length > 0) {
    const featuredContainer = document.getElementById("featured-products");
    const featuredProducts = products.slice(0, 4);

    featuredProducts.forEach((product) => {
      const productCard = `
        <div class="group flex flex-col h-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <!-- Product image container with fixed aspect ratio -->
          <div class="relative pt-[100%] bg-gray-100 overflow-hidden">
            <img src="${product.image}" 
                 alt="${product.name}"
                 class="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 loading="lazy">
                 
            <!-- Quick view button -->
            <a href="product.html?id=${product.id}" 
               class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-sm">
                Quick View
              </span>
            </a>
          </div>
          
          <!-- Product details -->
          <div class="flex flex-col flex-grow p-4">
            <div class="flex-grow">
              <h3 class="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                ${product.name}
              </h3>
              <p class="text-sm text-gray-500 mb-3 line-clamp-3">
                ${product.description}
              </p>
            </div>
            
            <div class="flex items-center justify-between mt-auto">
              <div>
                <p class="text-lg font-bold text-gray-900">
                  ${formatPrice(product.price)}
                </p>
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
              
              <button class="add-to-cart flex items-center justify-center p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                      data-id="${product.id}"
                      aria-label="Add to cart">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;
      featuredContainer.innerHTML += productCard;
    });

    // Event delegation for add-to-cart buttons
    featuredContainer.addEventListener("click", function (e) {
      const cartBtn = e.target.closest(".add-to-cart");
      if (cartBtn) {
        const productId = cartBtn.dataset.id;
        const product = products.find((p) => p.id == productId);
        if (product) {
          addToCart(product);
          updateCartCount();

          // Add visual feedback
          cartBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          `;
          cartBtn.classList.remove("bg-blue-600", "hover:bg-blue-700");
          cartBtn.classList.add("bg-green-500");

          setTimeout(() => {
            cartBtn.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            `;
            cartBtn.classList.remove("bg-green-500");
            cartBtn.classList.add("bg-blue-600", "hover:bg-blue-700");
          }, 1000);
        }
      }
    });
  }
});
