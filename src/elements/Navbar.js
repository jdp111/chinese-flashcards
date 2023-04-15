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
  NavbarText,
} from 'reactstrap';

function NavbarSetup(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='nav-master' {...args}>
        
        <NavbarBrand className='nav-title' href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav tabs = {true} fill = {true} className="me-auto" navbar>
            <NavItem>
              <NavLink className='navigator' href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navigator' href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          {args.username?
            <NavLink className='navigator' href = "/login" >Manage Account</NavLink>
            :
            <NavLink className='navigator' href = "/login" >Login/Register</NavLink>
          }
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarSetup;