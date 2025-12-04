// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle menu
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Smooth scroll para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animar elementos ao rolar
    function checkScroll() {
        const elements = document.querySelectorAll('.service-card, .testimonial-card, .contact-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Adicionar estilos iniciais para animação
    document.querySelectorAll('.service-card, .testimonial-card, .contact-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
    
    // Google Analytics para botões do WhatsApp
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-17116819067'
                });
            }
        });
    });
    
    // Validação do Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Criar elemento para mensagens
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message';
        contactForm.appendChild(messageDiv);
        
        // Máscara para telefone
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length > 0) {
                    if (value.length <= 2) {
                        value = '(' + value;
                    } else if (value.length <= 7) {
                        value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
                    } else if (value.length <= 11) {
                        value = '(' + value.substring(0, 2) + ') ' + value.substring(2, 7) + '-' + value.substring(7);
                    } else {
                        value = '(' + value.substring(0, 2) + ') ' + value.substring(2, 7) + '-' + value.substring(7, 11);
                    }
                }
                
                e.target.value = value;
            });
        }
        
        // Envio do formulário
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            // Validação do nome
            if (name.length < 3) {
                showError('Por favor, digite seu nome completo');
                isValid = false;
            }
            
            // Validação do telefone
            const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
            if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
                showError('Por favor, digite um telefone válido com DDD');
                isValid = false;
            }
            
            // Validação da mensagem
            if (message.length < 10) {
                showError('Por favor, descreva o modelo e defeito do aparelho');
                isValid = false;
            }
            
            if (isValid) {
                // Simulação de envio
                const formData = {
                    name: name,
                    phone: phone,
                    message: message,
                    timestamp: new Date().toISOString()
                };
                
                console.log('Dados do formulário:', formData);
                
                // Em produção, você enviaria para um servidor/API
                // fetch('seu-endpoint-api', { method: 'POST', body: JSON.stringify(formData) })
                
                // Mostrar mensagem de sucesso
                showSuccess('Solicitação enviada com sucesso! Entraremos em contato em até 24h.');
                
                // Limpar formulário
                contactForm.reset();
                
                // Rastrear conversão no Google Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'lead', {
                        'send_to': 'AW-17116819067'
                    });
                }
            }
        });
        
        function showError(message) {
            messageDiv.className = 'form-message error';
            messageDiv.textContent = message;
            messageDiv.style.display = 'block';
            
            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }
        
        function showSuccess(message) {
            messageDiv.className = 'form-message success';
            messageDiv.textContent = message;
            messageDiv.style.display = 'block';
            
            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    }
});