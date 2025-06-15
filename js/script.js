
const cursorTrail = document.querySelector('.cursor-trail');
let trailTimeout;

document.addEventListener('mousemove', (e) => {
    cursorTrail.style.opacity = '0.6';
    cursorTrail.style.left = `${e.clientX - 10}px`;
    cursorTrail.style.top = `${e.clientY - 10}px`;

    clearTimeout(trailTimeout);
    trailTimeout = setTimeout(() => {
        cursorTrail.style.opacity = '0';
    }, 500);
});


const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
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
    const originalText = heroTitle.textContent;
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 150);
    }, 500);
});