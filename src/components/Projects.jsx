import React from 'react';
import Project from './Project';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project Register - With Microsservices",
      description: `Este projeto foi desenvolvido com o objetivo de consolidar e expandir meu conhecimento em microsserviços.
        Nele, foram criadas duas API's Rest: uma para gerenciamento de usuários e outra para gerenciamento de projetos. 
        Uma das principais características do sistema é que só é possível registrar projetos quando estes estão correlacionados a um usuário específico.
        Além disso, para aplicar essa e outras regras de negócio, os serviços se comunicam entre si por meio de requisições HTTP, garantindo uma integração eficiente e segura.`,
      image: "https://s2-techtudo.glbimg.com/Bxr-QA4_gL25CarCCxr9JQFybt8=/0x0:1024x609/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      link: "https://github.com/AndersonWesley7b/ProjectsRegister-WithMicrosservices"
    },
    // Adicione outros projetos aqui
  ];

  return (
    <div className="projects">
      <h2>Projetos</h2>
      <div className="project-list">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;