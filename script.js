// Add this to script.js
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

function myFunction() {
    const navbarMenu = document.querySelector('.navbar ul');
    navbarMenu.classList.toggle('active');}
    // Carousel Logic
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;
const itemsToShow = 4; 
const itemWidth = carousel.children[0].offsetWidth + 20; 

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsToShow) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {

    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
// Select the Add to Cart button
const addToCartButton = document.getElementById('addToCartBtn');

// Add an event listener for the click event
addToCartButton.addEventListener('click', function () {
    // Display a message
    alert('Item added to cart successfully!');
});
// Select the Pay Now button
const payNowButton = document.getElementById('payNowBtn');


payNowButton.addEventListener('click', function () {

    window.location.href = 'success.html';
});
// Function to toggle the popup visibility
function togglePopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = popupOverlay.style.display === 'flex' ? 'none' : 'flex';
}

// Close the popup if clicked outside the popup card
window.addEventListener('click', function(event) {
    const popupOverlay = document.getElementById('popupOverlay');
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});
// Function to toggle the cart visibility
function toggleCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    cartOverlay.style.display = cartOverlay.style.display === 'flex' ? 'none' : 'flex';
    loadCartItems();
}

// Function to load cart items from localStorage and display them in the cart
function loadCartItems() {
    const cartContent = document.getElementById('cartContent');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cartItems.length === 0) {
        cartContent.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartContent.innerHTML = '';  // Clear any previous content
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p><strong>${item.name}</strong></p>
                <p>Price: $${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            `;
            cartContent.appendChild(itemElement);
        });
    }
}

// Function to handle checkout (for demonstration purposes)
function checkout() {
    alert('Proceeding to checkout...');
    // You can redirect to a checkout page or show a confirmation here
}

// Function to add item to the cart
function addToCart(name, price) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if item already exists in the cart
    const existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;  // Increment quantity if item exists
    } else {
        // Add new item to the cart
        cartItems.push({ name, price, quantity: 1 });
    }

    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

