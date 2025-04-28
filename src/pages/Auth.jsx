import React from 'react'
import { useContext } from 'react'
import { Form, useLocation, useNavigate } from 'react-router-dom'
import { Button, FormGroup, Input, Label, Card, CardBody } from 'reactstrap'
import { UserContext } from '../context/UserContext'
import { Toastify } from '../components/Toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUserPlus, faLock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

export const Auth = () => {
  const { user, signInUser, signUpUser, msg } = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()
  const isSignIn = location.pathname === '/auth/in'

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (isSignIn) {
      signInUser(data.get('email'), data.get('password'))
    } else {
      signUpUser(data.get('email'), data.get('password'), data.get('displayName'))
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
      color: 'white'
    }}>
      <Card style={{
        width: '100%',
        maxWidth: '500px',
        borderRadius: '12px',
        backgroundColor: '#1a1a1a',
        border: '1px solid #333',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
      }}>
        <CardBody>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h3 style={{ 
              color: '#ffffff',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}>
              <FontAwesomeIcon icon={isSignIn ? faSignInAlt : faUserPlus} />
              {isSignIn ? 'Login' : 'Sign Up'}
            </h3>
          </div>

          <Form onSubmit={handleSubmit}>
            <FormGroup style={{ marginBottom: '20px' }}>
              <p for="email" style={{ fontWeight: '500', color: '#ffffff' }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
                Email
              </p>
              <Input
                name="email"
                type="email"
                placeholder="email@example.com"
                style={{
                  borderRadius: '8px',
                  padding: '12px 15px',
                  backgroundColor: '#0d0d0d',
                  border: '1px solid #333',
                  color: 'white'
                }}
                required
              />
            </FormGroup>

            <FormGroup style={{ marginBottom: '20px' }}>
              <p for="password" style={{ fontWeight: '500', color: '#ffffff' }}>
                <FontAwesomeIcon icon={faLock} style={{ marginRight: '8px' }} />
                Password
              </p>
              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                style={{
                  borderRadius: '8px',
                  padding: '12px 15px',
                  backgroundColor: '#0d0d0d',
                  border: '1px solid #333',
                  color: 'white'
                }}
                required
              />
            </FormGroup>

            {!isSignIn && (
              <FormGroup style={{ marginBottom: '25px' }}>
                <p for="displayName" style={{ fontWeight: '500', color: '#ffffff' }}>
                  <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
                  Username
                </p>
                <Input
                  name="displayName"
                  type="text"
                  placeholder="Becenév"
                  style={{
                    borderRadius: '8px',
                    padding: '12px 15px',
                    backgroundColor: '#0d0d0d',
                    border: '1px solid #333',
                    color: 'white'
                  }}
                  required
                />
              </FormGroup>
            )}

            <Button
              type="submit"
              color="primary"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px',
                marginBottom: '15px',
                backgroundColor: '#3498db',
                border: 'none',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}
              className="hover-effect"
            >
              {isSignIn ? 'Login' : 'Sign Up'}
            </Button>

            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  navigate(isSignIn ? '/auth/up' : '/auth/in')
                }}
                style={{
                  color: '#3498db',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                className="hover-underline"
              >
                {isSignIn ? 'Don`t Have an Account? Sign Up!' : 'Already Have an Account? Login!'}
              </a>
            </div>

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/pwreset')
                }}
                style={{
                  color: '#95a5a6',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'all 0.3s ease'
                }}
                className="hover-underline"
              >
                <FontAwesomeIcon icon={faLock} style={{ marginRight: '5px' }} />
                Forgot Password?
              </a>
            </div>
          </Form>
        </CardBody>
      </Card>

      {msg && <Toastify {...msg} />}

      <style>
        {`
          .hover-effect:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
          }
          .hover-underline:hover {
            text-decoration: underline !important;
          }
          input::placeholder {
            color: #95a5a6 !important;
            opacity: 1 !important;
          }
        `}
      </style>
    </div>
  )
}