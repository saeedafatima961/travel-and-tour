
const toggleBtn = document.getElementById('toggle-btn');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show'); 
});

document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2, 
    });

    animatedElements.forEach(element => observer.observe(element));
});



