// Footer year + last modified
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
  hamButton.setAttribute("aria-expanded", isOpen);
});