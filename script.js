function toggleMenu(x) {
    x.classList.toggle("change");
    document.querySelector(".nav-links").classList.toggle("active");
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ...existing code...
function toggleMenu(x) {
    x.classList.toggle("change");
    document.querySelector(".nav-links").classList.toggle("active");
}