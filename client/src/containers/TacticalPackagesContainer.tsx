import React from 'react'
import { Container, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useGetTacticalPackagesQuery } from '../store/api'
import TacticalPackagesList from '../components/TacticalPackagesList'

const TacticalPackagesContainer: React.FC = () => {
  const { data: tacticalPackages, isLoading, error } = useGetTacticalPackagesQuery()

  if (error) {
    return (
      <Container className="mt-5 text-center">
        <Alert variant="danger">Failed to load tactical packages</Alert>
      </Container>
    )
  }

  return (
    <section className="mt-5 pt-5">
      <Container className="text-center">
        <div style={{ background: 'rgba(0,0,0, .75)', color: 'white', padding: '2rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
          <h1>Tactical Packages</h1>
          <br />
          <Button variant="dark" as={Link} to="/tactical_packages/new">
            Create Tactical Pack
          </Button>
          <br />
          <br />
          <h5>Select "Add Equipment" to add weapons and equipment to newly created tactical pack.</h5>
        </div>
        {isLoading ? (
          <div className="text-white">Loading...</div>
        ) : (
          tacticalPackages && <TacticalPackagesList tacticalPackages={tacticalPackages} />
        )}
      </Container>
    </section>
  )
}

export default TacticalPackagesContainer
