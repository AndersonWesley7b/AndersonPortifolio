import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <h1>Nome do Desenvolvedor</h1>
        <p>Desenvolvedor Full Stack | Apaixonado por Tecnologia</p>
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/seu-perfil-linkedin/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i> LinkedIn
        </a>
        {/* Adicione links para outras redes sociais */}
      </div>
    </div>
  );
}

export default Home;
