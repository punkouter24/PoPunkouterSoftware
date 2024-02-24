document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.rotating-image');
    images[0].style.display = 'block'; // Ensure first image is visible
    let currentImage = 0;

    // Initially hide all images except the first one
    images.forEach((img, index) => {
        if (index !== 0) img.style.display = 'none';
    });

    // Function to rotate images
    function rotateImage() {
        images[currentImage].style.opacity = '0';
        setTimeout(() => {
            images[currentImage].style.display = 'none';
            currentImage = (currentImage + 1) % images.length;
            images[currentImage].style.display = 'block';

            // Reset opacity to 0 and then fade in to ensure smooth transition
            images[currentImage].style.opacity = '0';
            setTimeout(() => {
                images[currentImage].style.opacity = '1';
            }, 10); // Short delay to allow display change to take effect
        }, 500); // Match this delay with the CSS transition time
    }

    // Set interval for rotating images
    setInterval(rotateImage, 2000); // Change images every 2 seconds

    // Optional: Add CSS transitions for smooth fading
    images.forEach(img => {
        img.style.transition = 'opacity 0.5s ease-in-out';
    });
});
