import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { extractUrlAndId } from "../utility/utils";
import { Outlet, NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logoutUser } = useContext(UserContext);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    user?.photoURL && setAvatar(extractUrlAndId(user.photoURL).url);
    !user && setAvatar(null);
  }, [user, user?.photoURL]);

  const fokep = "https://res.cloudinary.com/paksiblog13/image/upload/v1743165129/logo_rz64b3.jpg";
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed='top' expand="md" className="menu shadow-sm" style={{ borderBottom: '2px solid #ddd', backgroundColor: '#f8f9fa'}}>
        <NavbarBrand href="/" style={{paddingLeft:'30px',overflow:'hidden'}}>
          <img src={fokep} alt="Brand Logo" style={{ width: '58px', height:' 58px', objectFit: 'cover', borderRadius: '25%' , border:'solid 1px black'}} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar style={{ fontSize: '1.25rem' }}>
            <NavItem>
              <NavLink className="nav-link" to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/categories'>Categories</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/tips'>Tips & Ideas</NavLink>
            </NavItem>
            {user &&
              <NavItem>
                <NavLink className="nav-link" to='/create'>New Post</NavLink>
              </NavItem>
            }
          </Nav>
          <Nav navbar style={{ fontSize: '1.25rem' }}>
            {!user ?
              <>
                <NavItem>
                  <NavLink className="nav-link" to='/auth/in'>Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/auth/up'>Sign Up</NavLink>
                </NavItem>
              </>
              :
              <>
                <NavItem>
                  <NavLink className="nav-link" to='/' onClick={() => logoutUser()}>Logout</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {avatar ? <img className='myavatar' src={avatar} alt="User Avatar" style={{ borderRadius: '50%', width: '36px', height: '36px' }} /> : <RxAvatar title={user.displayName} size={30} />}
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem>
                      <NavLink className="nav-link" to='/profile'> Profile</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink className="nav-link text-danger" to='/deleteAccount'> Delete Account </NavLink>
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
