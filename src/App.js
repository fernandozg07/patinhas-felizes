import React, { useState } from 'react';
import './App.css';
import './index.css';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  if (showDashboard) {
    return <Dashboard onBack={() => setShowDashboard(false)} />;
  }

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
            <li><a href="#" onClick={() => setShowDashboard(true)}>Dashboard</a></li>
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
              <button onClick={() => setShowChatbot(true)} className="btn-secondary">🐶 Dr. Patinhas</button>
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
                Feitos com materiais de qualidade e design exclusivo da Patinhas Felizes.
              </p>
              <div className="produto-beneficios">
                <div className="beneficio">
                  <i className="fas fa-check"></i>
                  <span>Materiais de alta qualidade</span>
                </div>
                <div className="beneficio">
                  <i className="fas fa-check"></i>
                  <span>Design exclusivo e fofo</span>
                </div>
                <div className="beneficio">
                  <i className="fas fa-check"></i>
                  <span>Conforto garantido</span>
                </div>
                <div className="beneficio">
                  <i className="fas fa-check"></i>
                  <span>Conexão pet + tutor</span>
                </div>
              </div>
              <div className="produto-preco">
                <span className="preco">R$ 450,00 - R$ 600,00</span>
              </div>
              <a href="#contato" className="btn-primary">Quero o meu Kit!</a>
            </div>
          </div>
          
          {/* Exemplos de Pets */}
          <div className="pets-exemplos">
            <div className="section-header">
              <h3>Perfeito para todos os pets! 🐶🐱</h3>
              <p>Nossos kits são ideais para cães e gatos de todos os tamanhos</p>
            </div>
            
            <div className="pets-grid">
              <div className="pet-exemplo">
                <div className="pet-image">
                  <img src="/cachorro.png" alt="Cachorro fofo da clínica" />
                </div>
                <h4>Para Cães 🐕</h4>
                <p>Coleiras confortáveis e resistentes para seu melhor amigo de quatro patas</p>
              </div>
              
              <div className="pet-exemplo">
                <div className="pet-image">
                  <img src="/gato.png" alt="Gato fofo da clínica" />
                </div>
                <h4>Para Gatos 🐱</h4>
                <p>Coleiras delicadas e seguras, perfeitas para nossos felinos especiais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="depoimentos">
        <div className="container">
          <div className="section-header">
            <h2>O que nossos clientes dizem 💕</h2>
            <p>Histórias reais de amor e cuidado</p>
          </div>
          
          <div className="depoimentos-grid">
            <div className="depoimento-card">
              <div className="depoimento-content">
                <p>"A Dra. Ana cuidou do meu Thor com tanto carinho! O ambiente é super acolhedor e meu cachorro ficou calminho durante toda a consulta. Recomendo de olhos fechados!"</p>
              </div>
              <div className="depoimento-autor">
                <div className="autor-info">
                  <h4>Maria Silva</h4>
                  <span>Tutora do Thor</span>
                </div>
                <div className="estrelas">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            
            <div className="depoimento-card">
              <div className="depoimento-content">
                <p>"Minha gatinha Luna estava doentinha e a equipe foi incrível! Atendimento humanizado, preços justos e muito profissionalismo. Viramos clientes fiéis!"</p>
              </div>
              <div className="depoimento-autor">
                <div className="autor-info">
                  <h4>João Santos</h4>
                  <span>Tutor da Luna</span>
                </div>
                <div className="estrelas">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            
            <div className="depoimento-card">
              <div className="depoimento-content">
                <p>"O Kit Coleira + Pulseira é lindo demais! Eu e meu Buddy ficamos combinando e todo mundo elogia. A qualidade é excelente e o preço super justo!"</p>
              </div>
              <div className="depoimento-autor">
                <div className="autor-info">
                  <h4>Ana Costa</h4>
                  <span>Tutora do Buddy</span>
                </div>
                <div className="estrelas">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe Section */}
      <section id="equipe" className="equipe">
        <div className="container">
          <div className="section-header">
            <h2>Nossa Equipe Apaixonada 👩‍⚕️</h2>
            <p>Profissionais dedicados ao bem-estar dos seus bichinhos</p>
          </div>
          
          <div className="equipe-grid">
            <div className="equipe-card">
              <div className="equipe-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <h3>Dra. Ana Beatriz</h3>
              <p>Veterinária especialista em clínica geral com 8 anos de experiência. Apaixonada por cães e gatos, sempre trata cada paciente com muito carinho e dedicação.</p>
            </div>
            
            <div className="equipe-card">
              <div className="equipe-icon">
                <i className="fas fa-cut"></i>
              </div>
              <h3>Dr. Carlos Mendes</h3>
              <p>Cirurgião veterinário com especialização em procedimentos minimamente invasivos. Mais de 10 anos cuidando da saúde dos nossos amigos de quatro patas.</p>
            </div>
            
            <div className="equipe-card">
              <div className="equipe-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Enfª Juliana</h3>
              <p>Técnica em enfermagem veterinária, responsável pelo acolhimento e cuidados especiais. Sua paixão pelos animais é contagiante!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <div className="container">
          <div className="section-header">
            <h2>Dicas e Cuidados 📚</h2>
            <p>Informações valiosas para cuidar melhor do seu pet</p>
          </div>
          
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-icon">
                <i className="fas fa-apple-alt"></i>
              </div>
              <h3>Alimentação Saudável</h3>
              <p>Descubra quais alimentos são ideais para cada fase da vida do seu pet e como manter uma dieta equilibrada.</p>
              <a href="/blog/alimentacao" className="blog-link">Leia mais <i className="fas fa-arrow-right"></i></a>
            </div>
            
            <div className="blog-card">
              <div className="blog-icon">
                <i className="fas fa-running"></i>
              </div>
              <h3>Exercícios e Brincadeiras</h3>
              <p>Atividades divertidas para manter seu bichinho ativo, saudável e feliz todos os dias.</p>
              <a href="/blog/exercicios" className="blog-link">Leia mais <i className="fas fa-arrow-right"></i></a>
            </div>
            
            <div className="blog-card">
              <div className="blog-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Prevenção de Doenças</h3>
              <p>Saiba como prevenir as principais doenças e manter a saúde do seu pet sempre em dia.</p>
              <a href="/blog/prevencao" className="blog-link">Leia mais <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="contato">
        <div className="container">
          <div className="section-header">
            <h2>Venha nos Visitar! 📍</h2>
            <p>Estamos esperando você e seu bichinho de braços abertos</p>
          </div>
          
          <div className="contato-grid">
            <div className="contato-info">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h3>Endereço</h3>
                  <p>Rua das Gardênias, 128<br />
                  Bairro Jardim Aurora<br />
                  São Paulo – SP | CEP 04582-910</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-content">
                  <h3>Telefone</h3>
                  <p>(11) 9999-9999</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h3>E-mail</h3>
                  <p>contato@patinhasfelizes.com.br</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-content">
                  <h3>Horário de Funcionamento</h3>
                  <p>Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 14h<br />
                  Domingo: Emergências</p>
                </div>
              </div>
            </div>
            
            <div className="contato-form">
              <h3>Agende sua Consulta</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Seu nome" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Seu e-mail" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Seu telefone" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Nome do seu pet" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Tipo de serviço</option>
                    <option value="consulta">Consulta Geral</option>
                    <option value="vacina">Vacinação</option>
                    <option value="cirurgia">Cirurgia</option>
                    <option value="exame">Exames</option>
                    <option value="emergencia">Emergência</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Conte-nos mais sobre seu bichinho ou sua necessidade"></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  <i className="fas fa-heart"></i>
                  Agendar com Carinho
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-brand">
                <i className="fas fa-paw"></i>
                <span>Patinhas Felizes</span>
              </div>
              <p>Cuidando de vidas e fortalecendo o vínculo tutor–pet com carinho, confiança, segurança e conhecimento.</p>
              <div className="social-links">
                <a href="https://facebook.com/patinhasfelizes"><i className="fab fa-facebook"></i></a>
                <a href="https://instagram.com/patinhasfelizes"><i className="fab fa-instagram"></i></a>
                <a href="https://wa.me/5511999999999"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#servicos">Consultas Gerais</a></li>
                <li><a href="#servicos">Vacinação</a></li>
                <li><a href="#servicos">Cirurgias</a></li>
                <li><a href="#servicos">Exames</a></li>
                <li><a href="#servicos">Odontologia</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Sobre Nós</h4>
              <ul>
                <li><a href="#sobre">Nossa História</a></li>
                <li><a href="#equipe">Nossa Equipe</a></li>
                <li><a href="#produtos">Produtos Exclusivos</a></li>
                <li><a href="#produtos">Programa de Fidelidade</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contato</h4>
              <div className="footer-contact">
                <p><i className="fas fa-map-marker-alt"></i> Rua das Gardênias, 128<br />Jardim Aurora - São Paulo/SP</p>
                <p><i className="fas fa-phone"></i> (11) 9999-9999</p>
                <p><i className="fas fa-envelope"></i> contato@patinhasfelizes.com.br</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Clínica Veterinária Patinhas Felizes. Todos os direitos reservados. Feito com 💕 para pets e tutores.</p>
          </div>
        </div>
      </footer>
      
      {/* Chatbot */}
      <Chatbot isOpen={showChatbot} onClose={() => setShowChatbot(false)} />
      
      {/* Botão Flutuante Chat */}
      <button 
        onClick={() => setShowChatbot(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-40"
      >
        <span className="text-2xl">🐶</span>
      </button>
      
      {/* Botão Flutuante Dashboard */}
      <button 
        onClick={() => setShowDashboard(true)}
        className="fixed bottom-6 left-6 bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-40"
      >
        <span className="text-2xl">📊</span>
      </button>
    </div>
  );
}

export default App;