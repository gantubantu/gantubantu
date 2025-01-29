// Gallery Functionality
let currentImageIndex = 1;
const totalImages = 20;
const galleryImage = document.getElementById("gallery-image");

// Update Gallery Image with correct relative path
function updateGalleryImage() {
    galleryImage.src = `../../images/${currentImageIndex}.jpg`;
}

// Next Image
document.getElementById("next-btn").addEventListener("click", function () {
    currentImageIndex++;
    if (currentImageIndex > totalImages) {
        currentImageIndex = 1; // Loop back to first image
    }
    updateGalleryImage();
});

// Previous Image
document.getElementById("prev-btn").addEventListener("click", function () {
    currentImageIndex--;
    if (currentImageIndex < 1) {
        currentImageIndex = totalImages; // Loop back to last image
    }
    updateGalleryImage();
});

// Load first image on page load
window.onload = function () {
    updateGalleryImage();
};
