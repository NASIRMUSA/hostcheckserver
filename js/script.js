 // Mobile menu toggle with animation
 const mobileMenuButton = document.getElementById('mobile-menu-button');
 const mobileMenu = document.getElementById('mobile-menu');
 
 mobileMenuButton.addEventListener('click', () => {
     if (mobileMenu.classList.contains('hidden')) {
         mobileMenu.classList.remove('hidden');
         mobileMenu.style.opacity = '0';
         setTimeout(() => {
             mobileMenu.style.opacity = '1';
         }, 10);
     } else {
         mobileMenu.style.opacity = '0';
         setTimeout(() => {
             mobileMenu.classList.add('hidden');
         }, 300);
     }
 });

// Function to update cart count in both desktop and mobile views
function updateCartCount(count) {
  document.querySelectorAll("#cart-count, #mobile-cart-count").forEach((el) => {
    el.textContent = count;
  });
}
const products = [
  {
    id: 1,
    name: "TECNO camon 30",
    price: 330000, // ₦330,000 (price in Naira)
    description: "Latest TECNO smartphone with advanced features.",
    image: "image/tecno-camon-30.jpg",
    discount: 15, // percentage
    originalPrice: 375000, // original price before discount
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
    name: "SAMSUNG A06",
    price: 150000, // ₦150,000
    description: "Samsung A06 with sleek design and powerful features.",
    image: "image/Samsung-Galaxy-A06.jpg",
    discount: null, // no discount
    originalPrice: null,
  },
  // ... more products
];
