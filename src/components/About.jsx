import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';

function About() {
  return (
    <Container fluid className="about d-flex align-items-center justify-content-center">
      <Row>
        <Col>
          <h2 className="text-center">Sobre Mim</h2>
          <p>
            Profissional de desenvolvimento de software com experiência em projetos de grande escala e foco em inovação. Ingressei na área em 2022 e desde então tenho demonstrado entusiasmo contínuo por novas tecnologias e uma dedicação incessante ao aprimoramento de conhecimentos.
          </p>
          <p>
            Na minha atuação, concentro-me no desenvolvimento de APIs RestFull utilizando C# e o framework .NET. Possuo amplo conhecimento em Entity Framework, microsserviços, design patterns, SOLID, bem como em bancos de dados SQL e NoSQL. No âmbito do front-end, tenho expertise em ReactJs, com habilidades em Redux, Bootstrap e outras ferramentas essenciais.
          </p>
          <p>
            Destaco-me pela adaptabilidade em diversos contextos, aliando um instinto inovador e criativo. Estou sempre preparado para superar desafios, sendo reconhecido pelo diferencial de uma boa comunicação e vasta experiência no relacionamento direto com clientes.
          </p>
          <p>
            Se necessário resumir minha abordagem em três palavras, destacaria: confiança, dedicação e adaptabilidade.
          </p>
          {/* Incluir foto pessoal (opcional) */}
        </Col>
      </Row>
    </Container>
  );
}

export default About;
