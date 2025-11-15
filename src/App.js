import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <i className="fas fa-paw"></i>
            <span>Patinhas Felizes</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#equipe">Equipe</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Onde cada patinha é tratada com muito amor 🐾</h1>
            <p>Na Clínica Patinhas Felizes, seu melhor amigo recebe o cuidado que merece, com carinho, profissionalismo e um ambiente super acolhedor!</p>
            <div className="hero-buttons">
              <a href="#contato" className="btn-primary">
                <i className="fas fa-calendar-alt"></i>
                Agende uma Consulta
              </a>
              <a href="#sobre" className="btn-secondary">Conheça Nossa História</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/cachorro.png" alt="Cachorro fofo da clínica" />
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="sobre">
        <div className="container">
          <div className="section-header">
            <h2>Nossa História de Amor pelos Bichinhos 💕</h2>
            <p>Conheça os valores que nos movem todos os dias</p>
          </div>
          
          <div className="sobre-grid">
            <div className="sobre-card">
              <div className="card-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Nossa Missão</h3>
              <p>Proporcionar cuidado veterinário com acolhimento, ética, carinho e excelência, garantindo bem-estar aos animais e confiança aos tutores.</p>
            </div>
            
            <div className="sobre-card">
              <div className="card-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Nossa Visão</h3>
              <p>Ser reconhecida como a clínica mais acolhedora e humanizada da região, referência em atendimento veterinário de qualidade.</p>
            </div>
            
            <div className="sobre-card valores-card">
              <div className="card-icon">
                <i className="fas fa-gem"></i>
              </div>
              <h3>Nossos Valores</h3>
              <ul>
                <li><i className="fas fa-paw"></i> Amor pelos animais</li>
                <li><i className="fas fa-heart"></i> Empatia e atendimento humanizado</li>
                <li><i className="fas fa-shield-alt"></i> Ética e transparência</li>
                <li><i className="fas fa-award"></i> Qualidade nos serviços</li>
                <li><i className="fas fa-home"></i> Ambiente acolhedor</li>
                <li><i className="fas fa-leaf"></i> Responsabilidade social e ambiental</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="diferenciais">
        <div className="container">
          <div className="section-header">
            <h2>O que nos torna especiais? ✨</h2>
            <p>Descubra por que somos a escolha do coração de tantas famílias</p>
          </div>
          
          <div className="diferenciais-grid">
            <div className="diferencial-item">
              <div className="diferencial-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Atendimento Sem Pressa</h3>
              <p>Aqui, cada consulta tem o tempo necessário. Seu pet merece atenção completa e carinhosa!</p>
            </div>
            
            <div className="diferencial-item">
              <div className="diferencial-icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>Ambiente Aconchegante</h3>
              <p>Cores suaves e ambiente pensado para deixar você e seu bichinho super confortáveis.</p>
            </div>
            
            <div className="diferencial-item">
              <div className="diferencial-icon">
                <i className="fas fa-gift"></i>
              </div>
              <h3>Produtos Exclusivos</h3>
              <p>Kit Coleira + Pulseira matching para você e seu pet ficarem ainda mais conectados!</p>
            </div>
            
            <div className="diferencial-item">
              <div className="diferencial-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Programa de Fidelidade</h3>
              <p>Benefícios especiais para quem faz parte da nossa família Patinhas Felizes!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="servicos">
        <div className="container">
          <div className="section-header">
            <h2>Cuidados Completos para seu Melhor Amigo 🏥</h2>
            <p>Todos os serviços que seu pet precisa, com muito carinho</p>
          </div>
          
          <div className="servicos-grid">
            <div className="servico-item">
              <i className="fas fa-stethoscope"></i>
              <h3>Consultas Gerais</h3>
              <p>Check-ups completos e acompanhamento da saúde do seu bichinho</p>
            </div>
            
            <div className="servico-item">
              <i className="fas fa-syringe"></i>
              <h3>Vacinação</h3>
              <p>Protocolo completo de vacinas para manter seu pet sempre protegido</p>
            </div>
            
            <div className="servico-item">
              <i className="fas fa-cut"></i>
              <h3>Cirurgias</h3>
              <p>Procedimentos cirúrgicos com toda segurança e cuidado necessário</p>
            </div>
            
            <div className="servico-item">
              <i className="fas fa-microscope"></i>
              <h3>Exames Laboratoriais</h3>
              <p>Diagnósticos precisos para cuidar melhor da saúde do seu pet</p>
            </div>
            
            <div className="servico-item">
              <i className="fas fa-tooth"></i>
              <h3>Odontologia Veterinária</h3>
              <p>Cuidados especiais com a saúde bucal dos nossos pacientes</p>
            </div>
            
            <div className="servico-item">
              <i className="fas fa-graduation-cap"></i>
              <h3>Orientações e Educação</h3>
              <p>Dicas e orientações para você cuidar ainda melhor do seu bichinho</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="produtos">
        <div className="container">
          <div className="section-header">
            <h2>Kit Exclusivo Patinhas Felizes 🎁</h2>
            <p>Para você e seu pet ficarem ainda mais conectados!</p>
          </div>
          
          <div className="produto-destaque">
            <div className="produto-image">
              <img src="/coleira.png" alt="Kit Coleira + Pulseira Matching" />
            </div>
            <div className="produto-info">
              <h3>Kit Coleira + Pulseira Matching</h3>
              <p className="produto-descricao">
                Um kit super especial para demonstrar o amor entre você e seu pet! 
                Coleira confortável para seu bichinho e pulseira combinando para você.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;