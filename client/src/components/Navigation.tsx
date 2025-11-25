import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
  const linkStyle = { color: '#FFF' }
  const navbarStyle = { height: '6rem', background: 'rgba(0,0,0, 0.60)' }

  return (
    <Navbar variant="dark" fixed="top" style={navbarStyle}>
      <Nav.Link as={Link} to="/" style={linkStyle}>
        <h2>Home</h2>
      </Nav.Link>
      <Nav.Link as={Link} to="/tactical_packages" style={linkStyle}>
        <h2>Zombie Tactical Packs</h2>
      </Nav.Link>
      <Nav.Link as={Link} to="/primary_weapons" style={linkStyle}>
        <h2>Primary Weapons</h2>
      </Nav.Link>
      <Nav.Link as={Link} to="/secondary_weapons" style={linkStyle}>
        <h2>Secondary Weapons</h2>
      </Nav.Link>
      <Nav.Link as={Link} to="/lethal_weapons" style={linkStyle}>
        <h2>Lethal Weapons</h2>
      </Nav.Link>
      <Nav.Link as={Link} to="/tactical_items" style={linkStyle}>
        <h2>Tactical Items</h2>
      </Nav.Link>
      <Nav.Link as={Link} to="/tactical_packages/new" style={linkStyle}>
        <h2>Create</h2>
      </Nav.Link>
    </Navbar>
  )
}

export default Navigation
