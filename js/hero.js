// Simple image carousel with fade effect
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-carousel img');
    let currentIndex = 0;
    
    function showNextImage() {
        // Hide current image
        images[currentIndex].classList.remove('opacity-100');
        images[currentIndex].classList.add('opacity-0');
        
        // Move to next image
        currentIndex = (currentIndex + 1) % images.length;
        
        // Show next image
        images[currentIndex].classList.remove('opacity-0');
        images[currentIndex].classList.add('opacity-100');
    }
    
    // Initialize - show first image
    if (images.length > 0) {
        images[0].classList.add('opacity-100');
        
        // Start carousel if multiple images
        if (images.length > 1) {
            setInterval(showNextImage, 5000); // Change image every 5 seconds
        }
    }
});