import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,   UncontrolledDropdown,  DropdownToggle,  DropdownMenu, DropdownItem,  NavbarText,} from 'reactstrap';
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useEffect } from "react";
import { extractUrlAndId } from "../utility/utils";

export const Header=()=> {
  const [isOpen, setIsOpen]=useState(false);
  const [avatar,setAvatar]=useState(null)
  const {user,logoutUser}=useContext(UserContext)

  useEffect(()=>{
    user?.photoURL && setAvatar(extractUrlAndId(user.photoURL).url)
    !user && setAvatar(null)
  },[user,user?.photoURL])

  const toggle = () => setIsOpen(!isOpen);


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        WorkOutwise
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About Us</Nav.Link>
          <NavDropdown title="Product" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Article" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

          <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to='/'>Főoldal</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link" to='/posts'>Posztok</NavLink>
            </NavItem>
            {user && 
             <NavItem>
              <NavLink className="nav-link" to='/create'>Új poszt</NavLink>
            </NavItem>
            }

          
          </Nav>
          <Nav navbar>
          { !user ? 
          <>
            <NavItem>
              <NavLink className="nav-link" to='/auth/in'>Belépés</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/auth/up'>Regisztráció</NavLink>
            </NavItem>
          </> 
          :
          <>
            <NavItem>
              <NavLink className="nav-link" to='/'
                onClick={()=>logoutUser()}
                >Kijelentkezés
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               {avatar ? <img className='myavatar' src={avatar}/> : <RxAvatar title={user.displayName}/>}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavLink className="nav-link" to='/profile'> Személyes adatok</NavLink> 
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="nav-link" to='/deleteAccount'> Felhasználói fiók törlése </NavLink>    
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </>
          }
          </Nav>  
        </Collapse>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
