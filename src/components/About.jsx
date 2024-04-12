import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/About.css';

function About() {
  return (
    <Container fluid className="about d-flex align-items-center justify-content-center">
      <div>
        <h2>Sobre Mim</h2>
        <p>
          {/* Conteúdo sobre sua trajetória, experiências e objetivos */}
        </p>
        {/* Incluir foto pessoal (opcional) */}
      </div>
    </Container>
  );
}

export default About;
