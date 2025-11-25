import React from 'react'
import { Container, Alert } from 'react-bootstrap'
import { useGetLethalWeaponsQuery } from '../store/api'
import LethalWeaponsList from '../components/LethalWeaponsList'

const LethalWeaponsContainer: React.FC = () => {
  const { data: lethalWeapons, isLoading, error } = useGetLethalWeaponsQuery()

  if (error) {
    return (
      <Container className="mt-5 text-center">
        <Alert variant="danger">Failed to load lethal weapons</Alert>
      </Container>
    )
  }

  return (
    <section className="mt-5 pt-5">
      <Container className="text-center">
        <div style={{ background: 'rgba(0,0,0, 0.5)', color: 'white', padding: '2rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
          <h1>Lethal Weapons</h1>
          <p>Lethal weapons for taking out zombies efficiently.</p>
        </div>
        {isLoading ? (
          <div className="text-white">Loading...</div>
        ) : (
          lethalWeapons && <LethalWeaponsList lethalWeapons={lethalWeapons} />
        )}
      </Container>
    </section>
  )
}

export default LethalWeaponsContainer
