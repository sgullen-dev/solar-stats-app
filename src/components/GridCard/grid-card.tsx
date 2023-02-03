// React
import React from 'react';

// Bootstrap
import Card from 'react-bootstrap/Card';

// CSS
import './grid-card.css';

interface SolarCardProps {
  title: string;
  subtitle?: string;
  children?: any;
}

// Card component used to keep content aligned within primary grid
function GridCard(props: SolarCardProps) {
  return (
    <Card className="grid-card">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="flex-grow-0">{props.title}</Card.Title>
        <Card.Subtitle className="flex-grow-0 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        <div className="flex-grow-1">{props.children}</div>
      </Card.Body>
    </Card>
  );
}

export default GridCard;
