import React from 'react'
import { Container, Alert } from 'react-bootstrap'
import { useGetPrimaryWeaponsQuery } from '../store/api'
import PrimaryWeaponsList from '../components/PrimaryWeaponsList'

const PrimaryWeaponsContainer: React.FC = () => {
  const { data: primaryWeapons, isLoading, error } = useGetPrimaryWeaponsQuery()

  if (error) {
    return (
      <Container className="mt-5 text-center">
        <Alert variant="danger">Failed to load primary weapons</Alert>
      </Container>
    )
  }

  return (
    <section className="mt-5 pt-5">
      <Container className="text-center">
        <div style={{ background: 'rgba(0,0,0, 0.5)', color: 'white', padding: '2rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
          <h1>Primary Weapons</h1>
          <p>A primary weapon will be your go-to weapon for defense against hungry zombies.</p>
        </div>
        {isLoading ? (
          <div className="text-white">Loading...</div>
        ) : (
          primaryWeapons && <PrimaryWeaponsList primaryWeapons={primaryWeapons} />
        )}
      </Container>
    </section>
  )
}

export default PrimaryWeaponsContainer
