import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'

const Navigation = () => {
  return (
    <section id="navigation"> 
      <Navbar bg="dark" variant="dark" fixed="top" style={{ height: '5rem' }}>
      <Navbar.Brand href="/tactical_packages"><h4>Zombie Apocalypse Tactical Packs</h4></Navbar.Brand>
      <Nav className="mr-auto">
          <Nav.Link  href="/primary_weapons"><h4>Primary Weapons</h4></Nav.Link>
          <Nav.Link href="/secondary_weapons"><h4>Secondary Weapons</h4></Nav.Link>
          <Nav.Link href="/lethal_weapons"><h4>Lethal Weapons</h4></Nav.Link>
          <Nav.Link href="/tactical_items"><h4>Tactical Items</h4></Nav.Link>
          <Nav.Link href="/new_tactical_package"><h4>Create</h4></Nav.Link>      
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
      </Navbar>
    </section>
  )
}

export default Navigation