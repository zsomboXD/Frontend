import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,   UncontrolledDropdown,  DropdownToggle,  DropdownMenu, DropdownItem,  NavbarText,} from 'reactstrap';
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useEffect } from "react";
import { extractUrlAndId } from "../utility/utils";
import { Outlet, NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

export const Header=()=> {
  const [isOpen, setIsOpen] = useState(false);
  const {user,logoutUser}=useContext(UserContext)
  const [avatar,setAvatar]=useState(null)

  useEffect(()=>{
    user?.photoURL && setAvatar(extractUrlAndId(user.photoURL).url)
    !user && setAvatar(null)
  },[user,user?.photoURL])

  const fokep = "https://res.cloudinary.com/paksiblog13/image/upload/v1736880697/noFilter_uatjfq.png";
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
    <Navbar fixed='top' expand="md" 
    className="menu"
    style={{borderBottom:'1px solid gray',backgroundColor:'lightgray'}} >
      <NavbarBrand href="/">
      
      <img src={fokep}
      style={{
        width: '100%',
        height: '36px',
        objectFit: 'cover',
      }}
    />
      
      </NavbarBrand>
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
    </Navbar>
    <Outlet />
  </div>
  );
}
