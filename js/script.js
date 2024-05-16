document.getElementById('logo').addEventListener('click', function (event) {
  event.preventDefault();
});

// Button to toggle the search form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  cart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

// Button to toggle the shopping cart
let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
  cart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

// Button to toggle the login form
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');
}

// Button to toggle the navbar
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cart.classList.remove('active');
  loginForm.classList.remove('active');
}

// Close the search form, cart, login form, and navbar when clicking outside
window.onscroll = () => {
  searchForm.classList.remove('active');
  cart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

// For Home Page Slider
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev() {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}
// End Home Page Slider