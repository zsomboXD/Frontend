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
        width: '100%',
        maxWidth: '320px',
        cursor: 'pointer',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
        border: 'none',
        backgroundColor: '#1a1a1a',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        marginBottom: '1.5rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={() => navigate('/detail/' + id)}
      className="hover-effect-card"
    >
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '75%'
      }}>
        <img
          alt={title}
          src={photo?.url || defaultImage}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          className="card-image-hover"
        />
      </div>
      <CardBody style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
      }}>
        <CardTitle 
          tag="h5"
          style={{
            color: '#ffffff',
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '0.75rem',
            lineHeight: '1.4'
          }}
        >
          {title}
        </CardTitle>
        <CardSubtitle 
          className="mb-3"
          style={{
            color: '#4CAF50',
            fontSize: '0.85rem',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          {category}
        </CardSubtitle>
        <CardText
          style={{
            fontSize: '0.9rem',
            color: '#cccccc',
            lineHeight: '1.6',
            marginBottom: '1.5rem',
            flexGrow: 1
          }}
        >
          {truncatedStory(sanitizeHTML(story + " ..."))}
        </CardText>
        <div style={{
          marginTop: 'auto',
          textAlign: 'right'
        }}>
          <span style={{
            color: '#2196F3',
            fontSize: '0.8rem',
            fontWeight: '500',
            textDecoration: 'none',
            cursor: 'pointer'
          }}>
            Read More →
          </span>
        </div>
      </CardBody>
    </Card>
  );
};


