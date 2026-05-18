// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header && window.scrollY > 50) {
        header.classList.add('scrolled');
    } else if (header) {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
});

// Form WhatsApp - só executa se existir o form
const formContato = document.getElementById('form-contato');
if (formContato) {
    formContato.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome')?.value || '';
        const telefone = document.getElementById('telefone')?.value || '';
        const servico = document.getElementById('servico')?.value || '';
        const mensagem = document.getElementById('mensagem')?.value || '';
        
        let texto = `*Nova Solicitação - Site Ferrari & Bulcão*%0A%0A`;
        texto += `*Nome:* ${nome}%0A`;
        texto += `*WhatsApp:* ${telefone}%0A`;
        texto += `*Serviço:* ${servico}%0A`;
        texto += `*Descrição:* ${mensagem}`;
        
        const seuNumero = '5511982879645';
        const link = `https://wa.me/${seuNumero}?text=${encodeURIComponent(texto)}`;
        window.open(link, '_blank');
        this.reset();
    });
}

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
// Menu hamburguer - VERSÃO CORRIGIDA
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Só executa se os elementos existirem
    if (!menuToggle || !navLinks) {
        console.warn('Menu hambúrguer: #menuToggle ou #navLinks não encontrados');
        return;
    }

    // Abre/fecha menu
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Troca ícone entre hambúrguer e X
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    });

    // Fecha ao clicar nos links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            }
        });
    });

    // Fecha ao clicar fora
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            }
        }
    });
});