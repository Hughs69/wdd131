
// Author: Hubert Amoah
// Purpose: Display and filter temple information.
// Extra functionality: Dynamically creates temple cards and filters
// temples by dedication year and building area.

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Three additional temple objects
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
       imageUrl: "https://www.churchofjesuschrist.org/imgs/ea817531789318cff9d81198cdc39923708b7b79/full/800%2C/0/default"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/SaltLakeTemple.jpg"
    },
    {
        templeName: "Provo City Center Temple",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Provo_City_Center_Temple.jpg"
    }
];

// Select the temple container
const templeContainer = document.querySelector("#temple-container");

// Display temple cards
function displayTemples(templeList) {
    templeContainer.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("figure");

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        const caption = document.createElement("figcaption");
        caption.textContent = temple.templeName;

        const information = document.createElement("div");
        information.classList.add("temple-info");

        information.innerHTML = `
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        card.appendChild(image);
        card.appendChild(caption);
        card.appendChild(information);

        templeContainer.appendChild(card);
    });
}

// Filter temples according to the selected category
function filterTemples(category) {
    let filteredTemples = [];

    switch (category) {
        case "old":
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
            break;

        case "new":
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
            break;

        case "large":
            filteredTemples = temples.filter((temple) => {
                return temple.area > 90000;
            });
            break;

        case "small":
            filteredTemples = temples.filter((temple) => {
                return temple.area < 10000;
            });
            break;

        default:
            filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}

// Navigation filtering
const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const category = link.dataset.filter;
        filterTemples(category);

        navigationLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        link.classList.add("active");

        // Close the mobile menu after selecting a filter
        navigation.classList.remove("open");
        hamButton.classList.remove("open");
        hamButton.setAttribute("aria-expanded", "false");
    });
});

// Hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    hamButton.classList.toggle("open");
    hamButton.setAttribute("aria-expanded", isOpen);
});

// Footer year and last modified date
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

// Display all temples when the page loads
displayTemples(temples);
