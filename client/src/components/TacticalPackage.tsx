import React from 'react'
import { Card, Container } from 'react-bootstrap'
import type { TacticalPackage as TacticalPackageType } from '../types'

interface TacticalPackageProps {
  tacticalPackage: TacticalPackageType
}

const TacticalPackage: React.FC<TacticalPackageProps> = ({ tacticalPackage }) => {
  const { title, description, creator, primary_weapon, secondary_weapon, lethal_weapon, tactical_item } = tacticalPackage

  return (
    <Container className="text-center">
      <Card style={{ background: 'rgba(0,0,0, 0.80)', color: 'white', maxWidth: '65rem', margin: '0 auto 1rem' }}>
        <Card.Body>
          <Card.Title>
            <h1>{title}</h1>
          </Card.Title>
          <Card.Text>
            <h4>{description}</h4>
            {creator && <small>created by: {creator}</small>}
          </Card.Text>
        </Card.Body>
      </Card>

      {primary_weapon && (
        <Card style={{ background: 'rgba(0,0,0, 0.85)', color: 'white', maxWidth: '65rem', margin: '0 auto 1rem' }}>
          <Card.Body>
            <Card.Title>
              <h2>Primary Weapon:</h2>
              <h2>{primary_weapon.name}</h2>
            </Card.Title>
            <Card.Text>
              <h5>{primary_weapon.description}</h5>
            </Card.Text>
          </Card.Body>
        </Card>
      )}

      {secondary_weapon && (
        <Card style={{ background: 'rgba(0,0,0, 0.85)', color: 'white', maxWidth: '65rem', margin: '0 auto 1rem' }}>
          <Card.Body>
            <Card.Title>
              <h2>Secondary Weapon:</h2>
              <h2>{secondary_weapon.name}</h2>
            </Card.Title>
            <Card.Text>
              <h5>{secondary_weapon.description}</h5>
            </Card.Text>
          </Card.Body>
        </Card>
      )}

      {lethal_weapon && (
        <Card style={{ background: 'rgba(0,0,0, 0.85)', color: 'white', maxWidth: '65rem', margin: '0 auto 1rem' }}>
          <Card.Body>
            <Card.Title>
              <h2>Lethal Weapon:</h2>
              <h2>{lethal_weapon.name}</h2>
            </Card.Title>
            <Card.Text>
              <h5>{lethal_weapon.description}</h5>
            </Card.Text>
          </Card.Body>
        </Card>
      )}

      {tactical_item && (
        <Card style={{ background: 'rgba(0,0,0, 0.85)', color: 'white', maxWidth: '65rem', margin: '0 auto 1rem' }}>
          <Card.Body>
            <Card.Title>
              <h2>Tactical Equipment:</h2>
              <h2>{tactical_item.name}</h2>
            </Card.Title>
            <Card.Text>
              <h5>{tactical_item.description}</h5>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  )
}

export default TacticalPackage
