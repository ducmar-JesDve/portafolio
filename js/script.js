const cursorTrail = document.querySelector('.cursor-trail');
let trailTimeout;

if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', (e) => {
        cursorTrail.style.opacity = '0.6';
        cursorTrail.style.left = `${e.clientX - 10}px`;
        cursorTrail.style.top = `${e.clientY - 10}px`;

        clearTimeout(trailTimeout);
        trailTimeout = setTimeout(() => {
            cursorTrail.style.opacity = '0';
        }, 500);
    });
}

const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

navToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        if (window.innerWidth <= 768) {
            navLinksContainer.classList.remove('active');
        }
    });
});

const fadeInElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(element => observer.observe(element));

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (!heroTitle.classList.contains('typed')) {
        const originalText = heroTitle.textContent;
        heroTitle.style.visibility = 'hidden';
        setTimeout(() => {
            heroTitle.style.visibility = 'visible';
            typeWriter(heroTitle, originalText, 150);
            heroTitle.classList.add('typed');
        }, 500);
    }
});