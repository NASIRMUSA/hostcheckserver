class CartManager {
  // ... (keep existing code)

  setupCartEventListeners() {
    // Remove old listeners first
    document.querySelectorAll(".remove-item").forEach((btn) => {
      btn.replaceWith(btn.cloneNode(true));
    });

    // Add new listeners with proper error handling
    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", (e) => {
        const button = e.currentTarget;
        const productId = button.dataset.id;

        if (!productId) {
          console.error("Remove button missing data-id:", button);
          this.showError("Invalid product reference");
          return;
        }

        console.log("Attempting to remove item ID:", productId); // Debug
        this.removeItem(productId);
      });
    });
  }

  async removeItem(productId) {
    try {
      console.log(
        "Remove item called with ID:",
        productId,
        "Type:",
        typeof productId
      ); // Debug

      // Convert and validate ID
      const id = parseInt(productId);
      if (isNaN(id) || id <= 0) {
        throw new Error(`Invalid product ID: ${productId}`);
      }

      // Verify item exists first
      const itemExists = await new Promise((resolve) => {
        const transaction = this.db.transaction(["cart"], "readonly");
        const objectStore = transaction.objectStore("cart");
        const request = objectStore.get(id);

        request.onsuccess = () => resolve(!!request.result);
        request.onerror = () => resolve(false);
      });

      if (!itemExists) {
        throw new Error("Item not found in cart");
      }

      // Proceed with deletion
      await new Promise((resolve, reject) => {
        const transaction = this.db.transaction(["cart"], "readwrite");
        const objectStore = transaction.objectStore("cart");
        const request = objectStore.delete(id);

        request.onsuccess = () => {
          console.log("Successfully removed item ID:", id);
          resolve();
        };

        request.onerror = (event) => {
          reject(event.target.error);
        };
      });

      // Refresh cart display
      this.displayCartItems();
    } catch (error) {
      console.error("Remove item failed:", error);
      this.showError(error.message || "Failed to remove item");
    }
  }

  // ... (keep rest of the code)
}
