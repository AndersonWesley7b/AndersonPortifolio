import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/Project.css';

function Project({ title, description, image, link }) {
  return (
    <Card className="project">
      <Card.Img variant="top" src={image} alt={title} className="projectImage" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {link && <Button variant="primary" href={link} target="_blank">Ver Projeto</Button>}
      </Card.Body>
    </Card>
  );
}

export default Project;
