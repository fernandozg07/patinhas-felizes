// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de entrada para elementos quando aparecem na tela
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards e seções
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.sobre-card, .diferencial-item, .servico-item, .depoimento-card, .equipe-card, .blog-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Formulário de contato com validação clínica
document.querySelector('.contato-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const tipoAnimal = document.getElementById('tipoAnimal').value;
    const tipoServico = document.getElementById('tipoServico').value;
    
    // Validação específica para coleira
    if (tipoServico === 'coleira' && tipoAnimal !== 'cachorro' && tipoAnimal !== 'gato') {
        alert('⚠️ O Kit Coleira + Pulseira está disponível apenas para cães e gatos!');
        return;
    }
    
    // Simular envio do formulário
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando consulta clínica...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Agendamento Confirmado!';
        button.style.background = '#28a745';
        
        // Mostrar mensagem clínica personalizada
        const clinicalConfirmation = document.createElement('div');
        clinicalConfirmation.className = 'clinical-message clinical-highlight';
        clinicalConfirmation.innerHTML = `⚕️ Consulta agendada para ${tipoAnimal}! Nossa equipe clínica está preparada para receber vocês com muito carinho.`;
        clinicalConfirmation.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            max-width: 300px;
            animation: fadeInOut 4s ease-in-out;
        `;
        document.body.appendChild(clinicalConfirmation);
        
        setTimeout(() => {
            if (clinicalConfirmation.parentNode) clinicalConfirmation.remove();
        }, 4000);
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
            button.style.background = '';
            this.reset();
            updateColeiraOption();
        }, 3000);
    }, 2000);
});

// Efeito de hover nos cards de serviços com foco clínico
document.querySelectorAll('.servico-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        this.style.color = 'white';
        this.classList.add('clinical-highlight');
        const icon = this.querySelector('i');
        if (icon) icon.style.color = 'white';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'white';
        this.style.color = '';
        this.classList.remove('clinical-highlight');
        const icon = this.querySelector('i');
        if (icon) icon.style.color = '#FF8C42';
    });
});

// Interatividade dos cards de animais com foco clínico
document.querySelectorAll('.animal-card').forEach(card => {
    card.addEventListener('click', function() {
        const animalType = this.dataset.animal;
        
        // Remove foco clínico de todos os cards
        document.querySelectorAll('.animal-card').forEach(c => {
            c.classList.remove('clinical-focus');
        });
        
        // Adiciona foco clínico ao card selecionado
        this.classList.add('clinical-focus');
        
        // Mostra informações clínicas específicas
        showClinicalInfo(animalType);
        
        // Atualiza formulário se necessário
        const tipoAnimalSelect = document.getElementById('tipoAnimal');
        if (tipoAnimalSelect) {
            tipoAnimalSelect.value = animalType;
            updateColeiraOption();
        }
    });
});

// Função para mostrar informações clínicas
function showClinicalInfo(animalType) {
    const clinicalMessages = {
        cachorro: '🐕 Serviços para Cães: Consultas clínicas, vacinação, cirurgias e Kit Coleira exclusivo!',
        gato: '🐱 Serviços para Gatos: Cuidados felinos, prevenção, odontologia e Kit Coleira especial!'
    };
    
    // Remove mensagens anteriores
    const existingMessage = document.querySelector('.clinical-message');
    if (existingMessage) existingMessage.remove();
    
    // Cria nova mensagem clínica
    const message = document.createElement('div');
    message.className = 'clinical-message clinical-highlight';
    message.innerHTML = `<span class="clinical-icon">⚕️</span>${clinicalMessages[animalType]}`;
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10000;
        max-width: 400px;
        text-align: center;
        animation: fadeInOut 3s ease-in-out;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        if (message.parentNode) message.remove();
    }, 3000);
}

// Controle da opção coleira baseado no tipo de animal
function updateColeiraOption() {
    const tipoAnimal = document.getElementById('tipoAnimal');
    const coleiraOption = document.querySelector('.coleira-option');
    
    if (tipoAnimal && coleiraOption) {
        const selectedAnimal = tipoAnimal.value;
        
        if (selectedAnimal === 'cachorro' || selectedAnimal === 'gato') {
            coleiraOption.style.display = 'block';
            coleiraOption.textContent = `Kit Coleira + Pulseira para ${selectedAnimal === 'cachorro' ? 'Cães' : 'Gatos'} 🎁`;
        } else {
            coleiraOption.style.display = 'none';
            // Remove seleção se estava selecionada
            const tipoServico = document.getElementById('tipoServico');
            if (tipoServico && tipoServico.value === 'coleira') {
                tipoServico.value = '';
            }
        }
    }
}

// Event listener para mudança no tipo de animal
document.addEventListener('DOMContentLoaded', () => {
    const tipoAnimal = document.getElementById('tipoAnimal');
    if (tipoAnimal) {
        tipoAnimal.addEventListener('change', updateColeiraOption);
    }
});

// Contador animado para estatísticas (pode ser usado futuramente)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Adicionar classe ativa ao menu durante scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Efeito de partículas clínicas (corações e símbolos médicos)
function createFloatingHearts() {
    const hero = document.querySelector('.hero');
    const symbols = ['💕', '⚕️', '🩺', '💊', '🏥'];
    
    setInterval(() => {
        const symbol = document.createElement('div');
        symbol.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.style.position = 'absolute';
        symbol.style.left = Math.random() * 100 + '%';
        symbol.style.animationDuration = (Math.random() * 3 + 2) + 's';
        symbol.style.opacity = '0.6';
        symbol.style.fontSize = '18px';
        symbol.style.pointerEvents = 'none';
        symbol.style.animation = 'floatUp 4s ease-in-out infinite';
        
        hero.appendChild(symbol);
        
        setTimeout(() => {
            symbol.remove();
        }, 4000);
    }, 4000);
}

// CSS para animações clínicas e corações
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.7;
        }
        90% {
            opacity: 0.7;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
    
    .nav-menu a.active {
        color: #FF8C42 !important;
        font-weight: 600;
    }
    
    .clinical-message {
        font-weight: 600;
        font-size: 1.1em;
        box-shadow: 0 10px 30px rgba(40, 167, 69, 0.3);
    }
`;
document.head.appendChild(style);

// Inicializar efeitos quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    
    // Adicionar ícones clínicos aos serviços
    const servicoItems = document.querySelectorAll('.servico-item');
    servicoItems.forEach(item => {
        const title = item.querySelector('h3');
        if (title) {
            const clinicalIcon = document.createElement('span');
            clinicalIcon.className = 'clinical-icon';
            clinicalIcon.innerHTML = '⚕️';
            title.prepend(clinicalIcon);
        }
    });
    
    // Inicializar controle da coleira
    updateColeiraOption();
});

// Adicionar efeito de digitação no título principal
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

// Aplicar efeito de digitação ao título principal após carregamento
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
});