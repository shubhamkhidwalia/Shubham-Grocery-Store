// Toggle Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

themeToggle.addEventListener('click', () => {
    themeToggle.classList.toggle('active');

    if (themeToggle.classList.contains('active')) {
        themeIcon.textContent = "🌙";
        themeText.textContent = "Night Mode";
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
    } else {
        themeIcon.textContent = "☀️";
        themeText.textContent = "Day Mode";
        document.body.style.backgroundColor = "#f5f5f5";
        document.body.style.color = "#333";
    }
});

// Toggle English/Hindi Language
const langToggle = document.getElementById('language-toggle');
const langText = document.getElementById('lang-text');

const translations = {
    hindi: {
        home: "घर",
        shop: "दुकान",
        cart: "कार्ट",
        account: "खाता",
        snacks: "नाश्ता",
        coldDrinks: "शीतल पेय",
        toys: "खिलौने",
        spices: "मसाले",
        seasonalItems: "मौसमी वस्तुएं",
        specialOffers: "विशेष ऑफ़र",
        specialEdition: "विशेष संस्करण",
        smoking: "धूम्रपान",
        yourNeed: "आपकी ज़रूरत"
    },
    english: {
        home: "Home",
        shop: "Shop",
        cart: "Cart",
        account: "Account & Profile",
        snacks: "Snacks",
        coldDrinks: "Cold Drinks",
        toys: "Toys",
        spices: "Spices",
        seasonalItems: "Seasonal Items",
        specialOffers: "Special Offers",
        specialEdition: "Special Edition",
        smoking: "Smoking",
        yourNeed: "Your Need"
    }
};

langToggle.addEventListener('click', () => {
    langToggle.classList.toggle('active');

    if (langToggle.classList.contains('active')) {
        langText.textContent = "हिन्दी";
        document.getElementById("home").textContent = translations.hindi.home;
        document.getElementById("shop").textContent = translations.hindi.shop;
        document.getElementById("cart").textContent = translations.hindi.cart;
        document.getElementById("account").textContent = translations.hindi.account;
        document.getElementById("snacks").textContent = translations.hindi.snacks;
        document.getElementById("coldDrinks").textContent = translations.hindi.coldDrinks;
        document.getElementById("toys").textContent = translations.hindi.toys;
        document.getElementById("spices").textContent = translations.hindi.spices;
        document.getElementById("seasonalItems").textContent = translations.hindi.seasonalItems;
        document.getElementById("specialOffers").textContent = translations.hindi.specialOffers;
        document.getElementById("specialEdition").textContent = translations.hindi.specialEdition;
        document.getElementById("smoking").textContent = translations.hindi.smoking;
        document.getElementById("yourNeed").textContent = translations.hindi.yourNeed;
    } else {
        langText.textContent = "English";
        document.getElementById("home").textContent = translations.english.home;
        document.getElementById("shop").textContent = translations.english.shop;
        document.getElementById("cart").textContent = translations.english.cart;
        document.getElementById("account").textContent = translations.english.account;
        document.getElementById("snacks").textContent = translations.english.snacks;
        document.getElementById("coldDrinks").textContent = translations.english.coldDrinks;
        document.getElementById("toys").textContent = translations.english.toys;
        document.getElementById("spices").textContent = translations.english.spices;
        document.getElementById("seasonalItems").textContent = translations.english.seasonalItems;
        document.getElementById("specialOffers").textContent = translations.english.specialOffers;
        document.getElementById("specialEdition").textContent = translations.english.specialEdition;
        document.getElementById("smoking").textContent = translations.english.smoking;
        document.getElementById("yourNeed").textContent = translations.english.yourNeed;
    }
});
// Toggle Dark/Light Mode (same as before)
// ...

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});
// Add event listeners for the buttons
document.querySelectorAll('.cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Added to cart!");
    });
});

document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Proceeding to checkout...");
    });
});
