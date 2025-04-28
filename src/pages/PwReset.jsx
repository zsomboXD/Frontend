import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Toastify } from '../components/Toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';

export const PwReset = () => {
  const { msg, resetPassword } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    resetPassword(data.get('email'));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      paddingTop: '110px'
    }}>
      <Header />
      
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        backgroundColor: '#1a1a1a',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        border: '1px solid #333',
        padding: '2rem'
      }}>
        <button 
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '1rem',
            marginBottom: '1.5rem'
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          back
        </button>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <FontAwesomeIcon 
            icon={faKey} 
            style={{
              fontSize: '2.5rem',
              color: '#2c3e50',
              marginBottom: '1rem'
            }} 
          />
          <h3 style={{
            margin: 0,
            fontSize: '1.8rem',
            fontWeight: '600',
            color: 'white'
          }}>
            Change Password
          </h3>
          <p style={{
            marginTop: '0.5rem',
            color: '#95a5a6'
          }}>
            Enter your Email to Reset Password!
          </p>
        </div>

        <Form onSubmit={handleSubmit}>
          <FormGroup style={{ marginBottom: '1.5rem' }}>
            <p style={{ 
              fontWeight: '500',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '0.5rem'
            }}>
              <FontAwesomeIcon icon={faEnvelope} />
              Email
            </p>
            <Input
              name="email"
              placeholder="email@example.com"
              type="email"
              style={{
                backgroundColor: '#0d0d0d',
                border: '1px solid #333',
                borderRadius: '8px',
                padding: '12px 15px',
                color: 'white',
                fontSize: '1rem',
                ':focus': {
                  borderColor: '#2c3e50',
                  boxShadow: '0 0 0 0.2rem rgba(44, 62, 80, 0.25)'
                }
              }}
              required
            />
          </FormGroup>
          
          <Button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#2c3e50',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              ':hover': {
                backgroundColor: '#3d5166'
              }
            }}
          >
            <FontAwesomeIcon icon={faKey} style={{ marginRight: '8px' }} />
            New password
          </Button>
        </Form>
        
        {msg && <Toastify {...msg} />}
      </div>
    </div>
  );
};