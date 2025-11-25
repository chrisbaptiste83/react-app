import React from 'react'
import { Container, Alert } from 'react-bootstrap'
import { useGetTacticalItemsQuery } from '../store/api'
import TacticalItemsList from '../components/TacticalItemsList'

const TacticalItemsContainer: React.FC = () => {
  const { data: tacticalItems, isLoading, error } = useGetTacticalItemsQuery()

  if (error) {
    return (
      <Container className="mt-5 text-center">
        <Alert variant="danger">Failed to load tactical items</Alert>
      </Container>
    )
  }

  return (
    <section className="mt-5 pt-5">
      <Container className="text-center">
        <div style={{ background: 'rgba(0,0,0, 0.5)', color: 'white', padding: '2rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
          <h1>Tactical Items</h1>
          <p>Essential tactical items for survival during the zombie apocalypse.</p>
        </div>
        {isLoading ? (
          <div className="text-white">Loading...</div>
        ) : (
          tacticalItems && <TacticalItemsList tacticalItems={tacticalItems} />
        )}
      </Container>
    </section>
  )
}

export default TacticalItemsContainer
