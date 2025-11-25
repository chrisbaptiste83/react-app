import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Landing: React.FC = () => {
  return (
    <section className="d-flex justify-content-center align-items-center min-vh-100">
      <Container>
        <div
          style={{
            background: 'rgba(0,0,0, 0.65)',
            maxWidth: '80rem',
            color: 'white',
            padding: '2rem',
            borderRadius: '0.3rem',
            textAlign: 'center',
            margin: '0 auto',
          }}
        >
          <h1>Zombie Apocalypse Tactical Packs</h1>
          <br />
          <h5>Share your favorite tactical packages and prepare for doomsday like no other.</h5>
          <br />
          <Button variant="dark" as={Link} to="/tactical_packages">
            See Tactical Packs
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Landing
