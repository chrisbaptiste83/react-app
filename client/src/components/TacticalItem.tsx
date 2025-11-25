import React from 'react'
import { Card } from 'react-bootstrap'
import type { TacticalItem as TacticalItemType } from '../types'

const TacticalItem: React.FC<TacticalItemType> = ({ name, description }) => {
  return (
    <Card style={{ background: 'rgba(0,0,0, 0.85)', color: 'white', maxWidth: '65rem', margin: '0 auto 1rem' }}>
      <Card.Body>
        <Card.Title>
          <h2>{name}</h2>
        </Card.Title>
        <Card.Text>
          <h5>{description}</h5>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TacticalItem
