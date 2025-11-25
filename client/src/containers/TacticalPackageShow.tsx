import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Alert, Button, Card } from 'react-bootstrap'
import { useGetTacticalPackageQuery } from '../store/api'

const TacticalPackageShow: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data: tacticalPackage, isLoading, error } = useGetTacticalPackageQuery(Number(id))

  if (error) {
    return (
      <Container className="mt-5 text-center">
        <Alert variant="danger">Failed to load tactical package</Alert>
      </Container>
    )
  }

  if (isLoading) {
    return (
      <Container className="mt-5 text-center">
        <div className="text-white">Loading...</div>
      </Container>
    )
  }

  if (!tacticalPackage) {
    return (
      <Container className="mt-5 text-center">
        <Alert variant="warning">Tactical package not found</Alert>
      </Container>
    )
  }

  return (
    <section className="mt-5 pt-5">
      <Container className="text-center">
        <Card bg="dark" text="white" className="mb-3">
          <Card.Header as="h2">{tacticalPackage.title}</Card.Header>
          <Card.Body>
            {tacticalPackage.description && <Card.Text>{tacticalPackage.description}</Card.Text>}
            {tacticalPackage.creator && <Card.Text><small>created by: {tacticalPackage.creator}</small></Card.Text>}
            {tacticalPackage.primary_weapon && (
              <div className="mt-3">
                <h5>Equipment:</h5>
                <p>Primary Weapon: {tacticalPackage.primary_weapon.name}</p>
                {tacticalPackage.secondary_weapon && <p>Secondary Weapon: {tacticalPackage.secondary_weapon.name}</p>}
                {tacticalPackage.lethal_weapon && <p>Lethal Weapon: {tacticalPackage.lethal_weapon.name}</p>}
                {tacticalPackage.tactical_item && <p>Tactical Item: {tacticalPackage.tactical_item.name}</p>}
              </div>
            )}
            <div className="mt-3">
              <Button variant="primary" as={Link} to={`/tactical_packages/${id}/add_equipment`}>
                Add Equipment
              </Button>
              {' '}
              <Button variant="secondary" as={Link} to="/tactical_packages">
                Back to List
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  )
}

export default TacticalPackageShow
