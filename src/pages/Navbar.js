import React, { useState } from 'react';
import '../styles/Navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';

function NavbarSetup(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () =>{
    localStorage.clear()
    window.location.reload(false)
  }

  return (
    <div>
      <Navbar className='nav-master' {...args}>
        
        <NavbarBrand className='nav-title' href="/">CHINESELEARN</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav tabs = {true} fill = {true} className="me-auto" navbar>
            <NavItem>
              <NavLink className='navigator' href="/quiz">
                New Test
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navigator' href="/add">
                Add Cards
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navigator' href="/docsearch">
                Search Document
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className='navigator' nav caret>
                Your Cards
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem href="/cards/current">Current Cards
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/cards/complete">Completed Cards 
              </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          {args.username?
            <Button size = 'sm' outline color='link' className='navigator' onClick={logout}>   Logout</Button>
            :
            <NavLink className='navigator' href = "/login" >Login/Register</NavLink>
          }
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarSetup;