document.getElementById('logo').addEventListener('click', function (event) {
  event.preventDefault();
});

// Botón para alternar el formulario de búsqueda
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  cart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

//Botón para alternar el carrito de compras
let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
  cart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}


// Botón para alternar el formulario de inicio de sesión
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');
}

// Botón para alternar la barra de navegación
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cart.classList.remove('active');
  loginForm.classList.remove('active');
}

// Cierra el formulario de búsqueda, el carrito, el formulario de inicio de sesión y la barra de navegación al hacer clic fuera
window.onscroll = () => {
  searchForm.classList.remove('active');
  cart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}


// Para el control deslizante de la página de inicio
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

// Finalizar el control deslizante de la página de inicio