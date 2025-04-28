import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { extractUrlAndId } from "../utility/utils";
import { Outlet, NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faInfoCircle, 
  faDumbbell, 
  faLightbulb, 
  faQuoteRight,
  faPlus,
  faNewspaper,
  faSignInAlt,
  faUserPlus,
  faSignOutAlt,
  faUser,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logoutUser } = useContext(UserContext);
  const [avatar, setAvatar] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    user?.photoURL && setAvatar(extractUrlAndId(user.photoURL).url);
    !user && setAvatar(null);
  }, [user, user?.photoURL]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brandLogo = "https://res.cloudinary.com/paksiblog13/image/upload/v1743165129/logo_rz64b3.jpg";
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar 
        fixed='top' 
        expand="md" 
        className={`menu ${scrolled ? 'scrolled' : ''}`} 
        style={{ 
          backgroundColor: scrolled ? 'rgba(13, 13, 13, 0.98)' : '#0d0d0d',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          transition: 'all 0.3s ease',
          padding: '0.5rem 1rem'
        }}
      >
        <NavbarBrand href="/" className="d-flex align-items-center" style={{ paddingLeft: '20px' }}>
          <img 
            src={brandLogo} 
            alt="WorkoutWise Logo" 
            style={{ 
              width: '46px', 
              height: '46px', 
              objectFit: 'cover', 
              borderRadius: '12px',
              border: '2px solid #64B5F6',
              marginRight: '12px'
            }} 
          />
          <span style={{ 
            color: '#fff',
            fontWeight: '700',
            fontSize: '1.5rem',
            background: 'linear-gradient(90deg, #64B5F6, #42A5F5, #2196F3, #1E88E5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 8px rgba(100, 181, 246, 0.3)'
          }}>
            WorkoutWise
          </span>
        </NavbarBrand>
        
        <NavbarToggler onClick={toggle} style={{ color: '#fff', borderColor: 'rgba(100, 181, 246, 0.5)' }} />
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar style={{ gap: '0.5rem', padding: '0 1rem' }}>
            <NavItem>
              <NavLink className="nav-link" to='/' style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faHome} className="me-2" />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/about' style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/categories' style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faDumbbell} className="me-2" />
                Categories
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/tips' style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faLightbulb} className="me-2" />
                Tips
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/quotes' style={{ color: '#fff' }}>
                <FontAwesomeIcon icon={faQuoteRight} className="me-2" />
                Quotes
              </NavLink>
            </NavItem>      
            {user && (
              <>
                <NavItem>
                  <NavLink className="nav-link" to='/create' style={{ color: '#fff' }}>
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Workouts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/posts' style={{ color: '#fff' }}>
                    <FontAwesomeIcon icon={faNewspaper} className="me-2" />
                    Posts
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
          
          <Nav navbar style={{ gap: '1rem', padding: '0 1rem', alignItems: 'center' }}>
            {!user ? (
              <>
                <NavItem>
                  <NavLink 
                    className="nav-link" 
                    to='/auth/in' 
                    style={{ 
                      color: '#fff',
                      background: 'linear-gradient(90deg, #2196F3, #42A5F5)',
                      borderRadius: '24px',
                      padding: '0.6rem 1.8rem',
                      fontWeight: '600',
                      boxShadow: '0 2px 10px rgba(33, 150, 243, 0.3)'
                    }}
                  >
                    <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink 
                    className="nav-link" 
                    to='/auth/up' 
                    style={{ 
                      color: '#0d0d0d',
                      backgroundColor: '#fff',
                      borderRadius: '24px',
                      padding: '0.6rem 1.8rem',
                      fontWeight: '600',
                      boxShadow: '0 2px 10px rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                    Sign Up
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.5rem',
                  margin: '0 auto' 
                }}>
                  <NavItem>
                    <NavLink 
                      className="nav-link" 
                      to='/' 
                      onClick={() => logoutUser()}
                      style={{ 
                        color: '#fff',
                        background: 'rgba(239, 83, 80, 0.9)',
                        borderRadius: '24px',
                        padding: '0.6rem 1.8rem',
                        fontWeight: '600',
                        boxShadow: '0 2px 10px rgba(239, 83, 80, 0.3)',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                      Logout
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret style={{ 
                      color: '#fff', 
                      display: 'flex', 
                      alignItems: 'center',
                      padding: '0.5rem 1rem',
                      borderRadius: '24px',
                      background: 'rgba(100, 181, 246, 0.2)'
                    }}>
                      {avatar ? (
                        <img 
                          src={avatar} 
                          alt="User Avatar" 
                          style={{ 
                            borderRadius: '50%', 
                            width: '36px', 
                            height: '36px',
                            border: '2px solid #4CAF50',
                            objectFit: 'cover',
                            marginRight: '8px'
                          }} 
                        />
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <RxAvatar size={30} style={{ color: '#64B5F6', marginRight: '8px' }} />
                        </div>
                      )}
                      <span style={{ fontWeight: '500' }}>
                        {user.displayName || 'Profile'}
                      </span>
                    </DropdownToggle>
                    <DropdownMenu end style={{ 
                      backgroundColor: '#1a1a1a', 
                      border: '1px solid rgba(100, 181, 246, 0.3)',
                      borderRadius: '12px',
                      overflow: 'hidden'
                    }}>
                      <DropdownItem style={{ backgroundColor: 'transparent' }}>
                        <NavLink 
                          className="nav-link" 
                          to='/profile' 
                          style={{ 
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0.75rem 1.5rem'
                          }}
                        >
                          <FontAwesomeIcon icon={faUser} className="me-2" />
                          Profile
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem style={{ backgroundColor: 'transparent' }}>
                        <NavLink 
                          className="nav-link" 
                          to='/deleteAccount' 
                          style={{ 
                            color: '#EF5350',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0.75rem 1.5rem'
                          }}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} className="me-2" />
                          Delete Account
                        </NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
};