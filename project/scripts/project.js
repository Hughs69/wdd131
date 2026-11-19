
// Stop Malaria Africa - JavaScript

// Mobile navigation
const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");

if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.textContent = isOpen ? "✕" : "☰";
    });
}

// Malaria prevention tips stored in an array of objects
const preventionTips = [
    {
        title: "Use a mosquito net",
        category: "Protection",
        message: "Sleep under an insecticide-treated mosquito net every night."
    },
    {
        title: "Keep your surroundings clean",
        category: "Environment",
        message: "Remove standing water and keep containers covered."
    },
    {
        title: "Protect your skin",
        category: "Protection",
        message: "Wear suitable clothing and use recommended mosquito repellent."
    },
    {
        title: "Get tested early",
        category: "Healthcare",
        message: "Visit a health facility for testing when you suspect malaria."
    },
    {
        title: "Share information",
        category: "Awareness",
        message: "Encourage family members and neighbours to learn about malaria prevention."
    }
];

// Display a random prevention tip
function displayRandomTip() {
    const tipElement = document.querySelector("#dailyTip");

    if (!tipElement) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * preventionTips.length);
    const selectedTip = preventionTips[randomIndex];

    tipElement.innerHTML = `
        <strong>${selectedTip.title}</strong><br>
        ${selectedTip.message}
        <br><small>Category: ${selectedTip.category}</small>
    `;
}

// Show another tip when the button is clicked
const newTipButton = document.querySelector("#newTipButton");

if (newTipButton) {
    displayRandomTip();

    newTipButton.addEventListener("click", displayRandomTip);
}

// Quiz answers
const correctAnswers = {
    q1: "b",
    q2: "a",
    q3: "c"
};

// Calculate the quiz score
function calculateQuizScore(formData) {
    let score = 0;

    Object.entries(correctAnswers).forEach(([question, answer]) => {
        if (formData.get(question) === answer) {
            score++;
        }
    });

    return score;
}

// Display quiz result and save score
const quizForm = document.querySelector("#quizForm");

if (quizForm) {
    const previousScore = localStorage.getItem("malariaQuizScore");
    const previousScoreElement = document.querySelector("#previousScore");

    if (previousScore !== null) {
        previousScoreElement.textContent = `Your previous quiz score was ${previousScore} out of 3.`;
    }

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(quizForm);
        const score = calculateQuizScore(formData);
        const resultElement = document.querySelector("#quizResult");

        let message;

        if (score === 3) {
            message = "Excellent! You answered all questions correctly.";
        } else if (score >= 2) {
            message = "Good work! Review the prevention page to learn more.";
        } else {
            message = "Keep learning! Visit our prevention page and try again.";
        }

        resultElement.textContent = `You scored ${score} out of 3. ${message}`;

        localStorage.setItem("malariaQuizScore", String(score));
        previousScoreElement.textContent = `Your previous quiz score was ${score} out of 3.`;
    });
}

// Contact form
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const visitorName = document.querySelector("#visitorName").value.trim();
        const visitorEmail = document.querySelector("#visitorEmail").value.trim();
        const visitorMessage = document.querySelector("#visitorMessage").value.trim();

        const formMessage = document.querySelector("#formMessage");

        if (!visitorName || !visitorEmail || !visitorMessage) {
            formMessage.textContent = "Please complete all fields.";
            return;
        }

        // Save the message in the browser
        const savedMessages = JSON.parse(localStorage.getItem("malariaMessages") || "[]");

        const newMessage = {
            name: visitorName,
            email: visitorEmail,
            message: visitorMessage,
            date: new Date().toLocaleDateString()
        };

        savedMessages.push(newMessage);

        localStorage.setItem("malariaMessages", JSON.stringify(savedMessages));

        formMessage.textContent = `Thank you, ${visitorName}! Your message has been saved in this browser.`;

        contactForm.reset();
    });
}
