// Enhanced Price Formatter
const formatPrice = (price) => {
  if (isNaN(Number(price))) {
    console.error("Invalid price value:", price);
    return "₦0";
  }
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
};

// DOM Helpers with validation
const showElement = (element) => {
  if (element && element.classList) {
    element.classList.remove("hidden");
  }
};

const hideElement = (element) => {
  if (element && element.classList) {
    element.classList.add("hidden");
  }
};

// Robust Cart Manager Class
class CartManager {
  constructor() {
    this.db = null;
    this.cartVersion = 2; // Increment when making schema changes
    this.initDatabase();
    this.cacheElements();
    this.bindEvents();
  }

  cacheElements() {
    try {
      this.elements = {
        loading: document.getElementById("loading-state"),
        emptyState: document.getElementById("empty-state"),
        cartItems: document.getElementById("cart-items"),
        cartSummary: document.getElementById("cart-summary"),
        itemCount: document.getElementById("item-count"),
        subtotal: document.getElementById("subtotal"),
        totalPrice: document.getElementById("total-price"),
        checkoutButton: document.getElementById("checkout-button"),
      };
    } catch (error) {
      console.error("Failed to cache elements:", error);
    }
  }

  bindEvents() {
    try {
      if (this.elements.checkoutButton) {
        this.elements.checkoutButton.addEventListener(
          "click",
          this.handleCheckout.bind(this)
        );
      }
    } catch (error) {
      console.error("Failed to bind events:", error);
    }
  }

  initDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("Anema", this.cartVersion);

      request.onerror = (event) => {
        console.error("Database error:", event.target.error);
        this.showError("Error loading cart. Please refresh the page.");
        reject(event.target.error);
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        this.db.onerror = (dbEvent) => {
          console.error("Database error:", dbEvent.target.error);
        };
        this.displayCartItems();
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("cart")) {
          const store = db.createObjectStore("cart", { keyPath: "id" });
          store.createIndex("by_id", "id", { unique: true });
        }
      };
    });
  }

  async displayCartItems() {
    try {
      if (!this.db) {
        await this.initDatabase();
      }

      const cartItems = await this.getAllCartItems();
      hideElement(this.elements.loading);

      if (!cartItems || cartItems.length === 0) {
        showElement(this.elements.emptyState);
        return;
      }

      this.renderCartItems(cartItems);
      this.renderCartSummary(cartItems);
      this.setupCartEventListeners();

      showElement(this.elements.cartItems);
      showElement(this.elements.cartSummary);
    } catch (error) {
      console.error("Error displaying cart items:", error);
      this.showError("Error loading cart items. Please refresh the page.");
    }
  }

  async getAllCartItems() {
    return new Promise((resolve, reject) => {
      try {
        const transaction = this.db.transaction(["cart"], "readonly");
        const objectStore = transaction.objectStore("cart");
        const request = objectStore.getAll();

        request.onsuccess = () => resolve(request.result || []);
        request.onerror = (event) => {
          console.error("Error getting cart items:", event.target.error);
          reject(event.target.error);
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  renderCartItems(items) {
    try {
      this.elements.cartItems.innerHTML = items
        .map((item) => this.createCartItemHTML(item))
        .join("");
    } catch (error) {
      console.error("Error rendering cart items:", error);
      this.showError("Error displaying cart items");
    }
  }

  createCartItemHTML(item) {
    if (!item || !item.id) {
      console.error("Invalid cart item:", item);
      return "";
    }

    return `
  <div class="p-4 flex flex-col sm:flex-row gap-4" data-id="${item.id}">
    <img src="${item.image || ""}" alt="${item.name || "Product"}" 
         class="w-full sm:w-24 h-24 object-cover rounded-lg">
    
    <div class="flex-1">
      <h3 class="font-medium text-gray-900">${
        item.name || "Unnamed Product"
      }</h3>
      <p class="text-gray-600 mt-1">${formatPrice(item.price)}</p>
      
      <div class="mt-3 flex items-center">
        <button class="decrease-quantity p-2 text-gray-500 hover:text-blue-600" 
                data-id="${item.id}" aria-label="Decrease quantity">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
          </svg>
        </button>
        
        <span class="quantity mx-2 w-8 text-center">${item.quantity || 1}</span>
        
        <button class="increase-quantity p-2 text-gray-500 hover:text-blue-600" 
                data-id="${item.id}" aria-label="Increase quantity">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
    
    <div class="flex flex-col items-end justify-between">
    <span class="font-semibold">${formatPrice(
      (item.price || 0) * (item.quantity || 1)
    )}</span>

      <button class="remove-item mt-2 text-red-500 hover:text-red-700" 
              data-id="${item.id}" aria-label="Remove item">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  </div>
`;
  }

  renderCartSummary(items) {
    try {
      const totalItems = items.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
      );
      const subtotal = items.reduce(
        (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
        0
      );

      this.elements.itemCount.textContent = `${totalItems} ${
        totalItems === 1 ? "item" : "items"
      }`;
      this.elements.subtotal.textContent = formatPrice(subtotal);
      this.elements.totalPrice.textContent = formatPrice(subtotal);
    } catch (error) {
      console.error("Error rendering cart summary:", error);
    }
  }

  setupCartEventListeners() {
    this.cleanupEventListeners();

    // Helper function to safely add listeners
    const addSafeListener = (selector, event, handler) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(event, handler);
      });
    };

    try {
      addSafeListener(".increase-quantity", "click", (e) => {
        const id = this.getValidIdFromElement(e.target);
        if (id) this.updateQuantity(id, 1);
      });

      addSafeListener(".decrease-quantity", "click", (e) => {
        const id = this.getValidIdFromElement(e.target);
        if (id) this.updateQuantity(id, -1);
      });

      addSafeListener(".remove-item", "click", (e) => {
        const id = this.getValidIdFromElement(e.target);
        if (id) this.removeItem(id);
      });
    } catch (error) {
      console.error("Error setting up event listeners:", error);
    }
  }

  cleanupEventListeners() {
    // Clone elements to remove existing listeners
    ["increase-quantity", "decrease-quantity", "remove-item"].forEach(
      (className) => {
        document.querySelectorAll(`.${className}`).forEach((element) => {
          element.replaceWith(element.cloneNode(true));
        });
      }
    );
  }

  getValidIdFromElement(element) {
    try {
      const button = element.closest("button");
      if (!button) return null;

      const id = button.dataset.id;
      if (!id) {
        console.error("Element missing data-id:", button);
        return null;
      }

      const numId = Number(id);
      if (isNaN(numId)) {
        console.error("Invalid ID format:", id);
        return null;
      }

      return numId;
    } catch (error) {
      console.error("Error getting ID from element:", error);
      return null;
    }
  }

  async updateQuantity(productId, change) {
    if (!productId || isNaN(productId)) {
      console.error("Invalid product ID in updateQuantity:", productId);
      return;
    }

    try {
      const item = await this.getItemFromDB(productId);
      if (!item) {
        console.error("Item not found for update:", productId);
        return;
      }

      item.quantity += change;

      if (item.quantity <= 0) {
        await this.deleteItemFromDB(productId);
      } else {
        await this.updateItemInDB(item);
      }

      // Refresh display with small delay for smooth UI update
      setTimeout(() => this.displayCartItems(), 100);
    } catch (error) {
      console.error("Error updating quantity:", error);
      this.showError("Error updating item quantity");
    }
  }

  async getItemFromDB(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["cart"], "readonly");
      const objectStore = transaction.objectStore("cart");
      const request = objectStore.get(id);

      request.onsuccess = () => resolve(request.result);
      request.onerror = (event) => {
        console.error("Error getting item:", event.target.error);
        reject(event.target.error);
      };
    });
  }

  async updateItemInDB(item) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["cart"], "readwrite");
      const objectStore = transaction.objectStore("cart");
      const request = objectStore.put(item);

      request.onsuccess = () => resolve();
      request.onerror = (event) => {
        console.error("Error updating item:", event.target.error);
        reject(event.target.error);
      };
    });
  }

  async deleteItemFromDB(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["cart"], "readwrite");
      const objectStore = transaction.objectStore("cart");
      const request = objectStore.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = (event) => {
        console.error("Error deleting item:", event.target.error);
        reject(event.target.error);
      };
    });
  }

  async removeItem(productId) {
    if (!productId || isNaN(productId)) {
      console.error("Invalid product ID in removeItem:", productId);
      this.showError("Invalid product reference");
      return;
    }

    try {
      // Verify item exists first
      const itemExists = await this.getItemFromDB(productId);
      if (!itemExists) {
        this.showError("Item not found in cart");
        return;
      }

      await this.deleteItemFromDB(productId);
      this.displayCartItems();
    } catch (error) {
      console.error("Error removing item:", error);
      this.showError("Error removing item from cart");
    }
  }

  async handleCheckout() {
    try {
      const cartItems = await this.getAllCartItems();
      if (!cartItems || cartItems.length === 0) {
        this.showError("Your cart is empty");
        return;
      }

      const itemsText = cartItems
        .filter((item) => item && item.name)
        .map(
          (item) =>
            `- ${item.name} (${item.quantity || 1} × ${formatPrice(
              item.price || 0
            )})`
        )
        .join("\n");

      const totalItems = cartItems.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
      );
      const totalPrice = cartItems.reduce(
        (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
        0
      );

      const whatsappMessage =
        `Hello! I want to place an order:\n\n${itemsText}\n\n` +
        `Total Items: ${totalItems}\n` +
        `Total Price: ${formatPrice(totalPrice)}\n\n` +
        `Please confirm availability and payment details.`;

      window.open(
        `https://wa.me/2347069924612?text=${encodeURIComponent(
          whatsappMessage
        )}`,
        "_blank"
      );
    } catch (error) {
      console.error("Error during checkout:", error);
      this.showError("Failed to proceed with checkout. Please try again.");
    }
  }

  showError(message) {
    if (!this.elements.emptyState) return;

    hideElement(this.elements.loading);
    hideElement(this.elements.cartItems);
    hideElement(this.elements.cartSummary);

    this.elements.emptyState.innerHTML = `
      <div class="text-red-500 p-4 bg-red-50 rounded-lg">
        <p>${message}</p>
        <button onclick="window.location.reload()" class="mt-2 text-blue-600 hover:text-blue-800">
          Refresh Page
        </button>
      </div>
    `;

    showElement(this.elements.emptyState);
  }
}

// Initialize cart manager
document.addEventListener("DOMContentLoaded", () => {
  try {
    new CartManager();
  } catch (error) {
    console.error("Failed to initialize cart:", error);
    const errorDiv = document.createElement("div");
    errorDiv.className = "p-4 bg-red-100 text-red-800";
    errorDiv.textContent = "Failed to load cart. Please refresh the page.";
    document.getElementById("cart-container")?.prepend(errorDiv);
  }
});
