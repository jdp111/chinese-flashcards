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
} from 'reactstrap';

function NavbarSetup(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
              <NavLink className='navigator' href="/add">
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