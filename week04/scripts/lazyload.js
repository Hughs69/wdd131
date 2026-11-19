
// Display the last modified date of the document
const lastModified = document.querySelector("#lastModified");

lastModified.textContent = document.lastModified;

// Select all images inside the main element
const images = document.querySelectorAll("main img");

// Add the fade-in animation after each image loads
images.forEach((image) => {
    function showImage() {
        image.classList.add("loaded");
    }

    // Check if the image has already loaded
    if (image.complete && image.naturalWidth > 0) {
        showImage();
    } else {
        image.addEventListener("load", showImage);
    }
});
