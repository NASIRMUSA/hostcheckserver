// Sample product data with Nigerian Naira prices
const ItemsProducts = [
  {
    id: 1,
    name: "TECNO Camon 30Pro",
    price: 320000, // ₦320,000
    description: "256GB Storage, 8GB RAM, 64MP Camera, 5000mAh Battery",
    image: "image/tecno-camon-30.jpg",
    discount: null,
    originalPrice: null,
  },
  {
    id: 2,
    name: "SAMSUNG A16",
    price: 225000, // ₦225,000
    description: "Samsung A16 with stunning display and performance.",
    image: "image/SAMSUNG-A16.jpg",
    discount: 10,
    originalPrice: 250000,
  },
  {
    id: 3,
    name: "INFINIX NOTE 40 PRO",
    price: 385000, // ₦385,000
    description: "Infinix Note 40 Pro with high performance.",
    image: "image/infinix-note-40-pro.avif",
    discount: 15,
    originalPrice: 453000,
  },
  {
    id: 4,
    name: "REALME C16",
    price: 175000, // ₦175,000
    description: "Realme C16 with excellent camera and battery life.",
    image: "image/realmec61.avif",
    discount: null, // no discount
    originalPrice: null,
  },

  {
    id: 5,
    name: "NOKIA 105 DS",
    price: 15000, // ₦15,000
    description: "Dual SIM, 1.8-inch Display, 800mAh Battery",
    image: "image/Nokia-105-DS.jpg",
    discount: null,
    originalPrice: null,
  },
  {
    id: 6,
    name: "TECNO POP 9",
    price: 125000, // ₦125,000
    description: "128GB Storage, 4GB RAM, 50MP Camera, 5000mAh Battery",
    image: "image/TECNOPOP9.jpg",
    discount: null,
    originalPrice: null,
  },
  {
    id: 7,
    name: "TECNO POP 8",
    price: 106000, // ₦106,000
    description: "64GB Storage, 2GB RAM, 50MP Camera, 5000mAh Battery",
    image: "image/Tecno-Pop-8.png",
    discount: null,
    originalPrice: null,
  },
  {
    id: 8,
    name: "TECNO SPARK 30C",
    price: 139500, // ₦139,500
    description: "128GB Storage, 4GB RAM, 50MP Camera, 5000mAh Battery",
    image: "image/Tecno-Spark-30C.jpg",
    discount: null,
    originalPrice: null,
  },
  {
    id: 9,
    name: "Itel A50C",
    price: 94000, // ₦94,000
    description: "32GB Storage, 2GB RAM, 50MP Camera, 5000mAh Battery",
    image: "image/itel-A50.jpg",
    discount: null,
    originalPrice: null,
  },
  {
    id: 10,
    name: "Itel A80",
    price: 105000, // ₦105,000
    description: "128GB Storage, 3GB RAM, 50MP Camera, 5000mAh Battery",
    image: "image/itelA80.webp",
    discount: null,
    originalPrice: null,
  },
  {
    id: 11,
    name: "Itel P65",
    price: 135000, // ₦135,000
    description: "128GB Storage, 4GB RAM, 50MP Camera, 6000mAh Battery",
    image: "image/itel-P65.webp",
    discount: null,
    originalPrice: null,
  },
  {
    id: 12,
    name: "Itel P70",
    price: 127500, // ₦127,500
    description: "128GB Storage, 4GB RAM, 50MP Camera, 6000mAh Battery",
    image: "image/itel-p70.webp",
    discount: null,
    originalPrice: null,
  },
  {
    id: 13,
    name: "Itel A06",
    price: 82500, // ₦82,500
    description: "32GB Storage, 2GB RAM, 50MP Camera, 5000mAh Battery",
    image: "image/Itel-A06.webp",
    discount: null,
    originalPrice: null,
  },
  {
    id: 14,
    name: "Itel 5606",
    price: 12800, // ₦12,800
    description: "Dual SIM, 1.8-inch Display, 800mAh Battery",
    image: "image/itel-5606.webp",
    discount: null,
    originalPrice: null,
  },
  {
    id: 15,
    name: "Itel 2160",
    price: 13500, // ₦13,500
    description: "Dual SIM, 1.8-inch Display, 1000mAh Battery",
    image: "image/itel-2160.webp",
    discount: null,
    originalPrice: null,
  },
  {
    id: 16,
    name: "REALME NOTE 50",
    price: 125000, // ₦125,000
    description: "128GB Storage, 4GB RAM, 50MP Camera, 5000mAh Battery",
    image: "image/realme-note-50.webp",
    discount: null,
    originalPrice: null,
  },
  {
    id: 17,
    name: "REALME NOTE 50 PRO",
    price: 145000, // ₦145,000
    description: "256GB Storage, 8GB RAM, 108MP Camera, 5000mAh Battery",
    image: "image/realme-note-50-pro.jpg",
    discount: null,
    originalPrice: null,
  },
  {
    id: 18,
    name: "INFINIX SMART 8",
    price: 105000, // ₦105,000
    description: "64GB Storage, 2GB RAM, 50MP Camera, 5000mAh Battery",
    image: "image/infinix-smart8.png",
    discount: null,
    originalPrice: null,
  },
  {
    id: 19,
    name: "INFINIX SMART 9",
    price: 130000, // ₦130,000
    description: "128GB Storage, 3GB RAM, 50MP Camera, 5000mAh Battery",
    image: "image/INFINIX-SMART-9.png",
  },
  {
    id: 20,
    name: "INFINIX NOTE 40 PRO",
    price: 385000, // ₦385,000
    description: "256GB Storage, 8GB RAM, 108MP Camera, 5000mAh Battery",
    image: "image/infinix-note-40-pro.avif",
    discount: null,
    originalPrice: null,
  },
  {
    id: 21,
    name: "INFINIX HOT 50i",
    price: 142000, // ₦142,000
    description: "128GB Storage, 4GB RAM, 50MP Camera, 5000mAh Battery",
    image: "image/INFINIX_HOT_50i.webp",
    discount: null,
    originalPrice: null,
  },
  {
    id: 22,
    name: "TECNO T528",
    price: 20000, // ₦20,000
    description: "Dual SIM, 2.4-inch Display, 1000mAh Battery",
    image: "image/TECNO-T528-3.png",
    discount: null,
    originalPrice: null,
  },
  {
    id: 23,
    name: "REDMI Note 13",
    price: 233100, // ₦49,999 (price in Naira)
    description: "256GB Storage, 8GB RAM, 108MP Camera, 5000mAh Battery",
    image: "image/REDMINOTE13.webp",
    discount: 10, // percentage
    originalPrice: 259000, // original price before discount
  },
  {
    id: 24,
    name: "REDMI A3X",
    price: 115500, // ₦115,500
    description: "128GB Storage, 4GB RAM, 50MP Camera, 5000mAh Battery",
    image: "image/REDMIA3X.jpg",
    discount: null,
    originalPrice: null,
  },
  {
    id: 25,
    name: "REDMI A3Pro",
    price: 125000, // ₦125,000
    description: "128GB Storage, 4GB RAM, 50MP Camera, 5000mAh Battery",
    image: "image/REDMIA3Pro.jpg",
    discount: null,
    originalPrice: null,
  },
  {
    id: 26,
    name: "REDMI 14C",
    price: 148000, // ₦148,000,
    description: "128GB Storage, 4GB RAM, 50MP Camera, 5000mAh Battery",
    image: "image/REDMI14C.jpg",
    discount: null, // no discount
    originalPrice: null,
  },
];

// Format price as Nigerian Naira
function formatPrice(price) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
}

// Initialize IndexedDB
let db;
const request = indexedDB.open("Anema", 2);

request.onerror = function (event) {
  console.error("Database error:", event.target.error);
};

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore("cart", { keyPath: "id" });
  objectStore.createIndex("id", "id", { unique: true });
};

request.onsuccess = function (event) {
  db = event.target.result;
  updateCartCount();
};

// Display ItemsProducts on ItemsProducts.html
if (window.location.pathname.includes("products.html")) {
  const productGrid = document.querySelector(".grid");

  ItemsProducts.forEach((product) => {
    const productCard = `
    <div class="group relative border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:-translate-y-1">
      <!-- Product Image with Hover Effect -->
      <div class="relative overflow-hidden h-48">
        <img src="${product.image}" alt="${product.name}" 
             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
        
        <!-- Wishlist Button (Top Right) -->
        <button class="absolute top-3 right-3 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-white transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      
      <!-- Product Info -->
      <div class="p-4">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-lg font-semibold text-gray-900 line-clamp-2">${
            product.name
          }</h3>
          ${
            product.discount
              ? `
            <span class="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded-full">
              -${product.discount}%
            </span>
          `
              : ""
          }
        </div>
        
        <!-- Price Section -->
        <div class="mb-4">
          ${
            product.originalPrice
              ? `
            <span class="text-sm text-gray-400 line-through mr-2">
              ${formatPrice(product.originalPrice)}
            </span>
          `
              : ""
          }
          <span class="text-lg font-bold text-gray-800">
            ${formatPrice(product.price)}
          </span>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex space-x-2">
          <a href="product.html?id=${product.id}" 
             class="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 text-center text-sm font-medium transition-colors">
            View Details
          </a>
          <button class="add-to-cart flex items-center justify-center bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                  data-id="${product.id}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
    productGrid.innerHTML += productCard;
  });

  // Add event listener for add-to-cart buttons
  productGrid.addEventListener("click", (e) => {
    if (e.target.closest(".add-to-cart")) {
      const productId = e.target.closest(".add-to-cart").dataset.id;
      const product = ItemsProducts.find((p) => p.id == productId);
      addToCart(product);
    }
  });
}

// Display single product on product.html
if (window.location.pathname.includes("product.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));
  const product = ItemsProducts.find((p) => p.id === productId);

  if (product) {
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-image").alt = product.name;
    document.getElementById("product-title").textContent = product.name;
    document.getElementById("product-price").textContent = formatPrice(
      product.price
    );
    document.getElementById("product-description").textContent =
      product.description;

    document.getElementById("add-to-cart").addEventListener("click", () => {
      addToCart(product);
    });
  }
}
// Cart functions using IndexedDB
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

// Update cart.js to use Nigerian Naira formatting as well
// Make sure to update the cart display code to use formatPrice() for item prices and totals
