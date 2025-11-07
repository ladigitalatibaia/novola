// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Close menu when link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Format message for WhatsApp
        const whatsappMessage = `Olá! Meu nome é ${name}. Telefone: ${phone}. Mensagem: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Redirect to WhatsApp
        window.open(`https://wa.me/5511980833734?text=${encodedMessage}`, '_blank');
        
        // Reset form
        contactForm.reset();
    });
}
