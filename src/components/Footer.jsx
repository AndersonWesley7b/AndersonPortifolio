import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Seu Nome ou Empresa</p>
      <a href="https://www.linkedin.com/in/andersonwesleyterra/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i> LinkedIn
      </a>
      {/* Adicione links para outras redes sociais */}
    </footer>
  );
}

export default Footer;
