import React, { useState } from 'react';
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Navbar,
  NavLink
} from 'reactstrap';

export default function AppNavBar(props) {

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(prevState => !prevState);
  }

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
          <NavbarBrand href="/">Shopping List</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={open} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.rogerwinright.com">Website</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    </div>
  )
}
