import React from 'react';
import { sanitizeHTML, truncatedStory } from '../utility/utils';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export const MyCard = ({ id, category, story, photo, title }) => {
  const navigate = useNavigate();
  const defaultImage = "https://res.cloudinary.com/paksiblog13/image/upload/v1736877055/photo_p7mclb.jpg";

  return (
    <Card
      style={{
        width: '18rem',
        cursor: 'pointer',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
      onClick={() => navigate('/detail/' + id)}
      className="mb-4"
    >
      <img
        alt={title}
        src={photo?.url || defaultImage}
        style={{
          width: '100%',
          height: '450px',
          objectFit: 'cover',
        }}
      />
      <CardBody className="title">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted text-end">
          {category}
        </CardSubtitle>
        <CardText
          style={{
            fontSize: '0.8rem',
            textDecoration: 'none',
            color: 'gray',
          }}
        >
          {truncatedStory(sanitizeHTML(story+ " ..."))}
        </CardText>
      </CardBody>
    </Card>
  );
};
