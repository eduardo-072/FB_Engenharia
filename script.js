// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Form submission
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Solicitação enviada! Nossa equipe técnica entrará em contato em até 24h.');
    this.reset();
});

// Animate stats on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card-servico, .stat-card, .dif-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Menu hamburguer
const menuToggle = document.createElement('button');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
menuToggle.setAttribute('aria-label', 'Abrir menu');

document.querySelector('nav').insertBefore(menuToggle, document.querySelector('.nav-links'));

menuToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (document.querySelector('.nav-links').classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Fechar menu ao clicar no link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-xmark');
        menuToggle.querySelector('i').classList.add('fa-bars');
    });
});

document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const servico = document.getElementById('servico').value;
    const mensagem = document.getElementById('mensagem').value;
    
    let texto = `*Nova Solicitação - Site Ferrari & Bulcão*%0A%0A`;
    texto += `*Nome:* ${nome}%0A`;
    texto += `*WhatsApp:* ${telefone}%0A`;
    texto += `*Serviço:* ${servico}%0A`;
    texto += `*Descrição:* ${mensagem}`;
    
    const seuNumero = '5511982879645'; // Peguei o número que já tá no seu botão do WhatsApp
    
    const link = `https://wa.me/${seuNumero}?text=${encodeURIComponent(texto)}`;
    window.open(link, '_blank');
});
