import React from 'react'
import { Container, Alert } from 'react-bootstrap'
import { useGetSecondaryWeaponsQuery } from '../store/api'
import SecondaryWeaponsList from '../components/SecondaryWeaponsList'

const SecondaryWeaponsContainer: React.FC = () => {
  const { data: secondaryWeapons, isLoading, error } = useGetSecondaryWeaponsQuery()

  if (error) {
    return (
      <Container className="mt-5 text-center">
        <Alert variant="danger">Failed to load secondary weapons</Alert>
      </Container>
    )
  }

  return (
    <section className="mt-5 pt-5">
      <Container className="text-center">
        <div style={{ background: 'rgba(0,0,0, 0.5)', color: 'white', padding: '2rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
          <h1>Secondary Weapons</h1>
          <p>A secondary weapon is a backup in case your primary runs out of ammo.</p>
        </div>
        {isLoading ? (
          <div className="text-white">Loading...</div>
        ) : (
          secondaryWeapons && <SecondaryWeaponsList secondaryWeapons={secondaryWeapons} />
        )}
      </Container>
    </section>
  )
}

export default SecondaryWeaponsContainer
