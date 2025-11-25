import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import type { TacticalPackage } from '../types'

const TacticalPackageListItem: React.FC<TacticalPackage> = ({ id, title, description, creator }) => {

  return (
    <Card style={{ background: 'rgba(0,0,0, 0.85)', color: 'white', maxWidth: '65rem', margin: '0 auto 1rem' }}>
      <Card.Body>
        <Card.Title>
          <h2>{title}</h2>
        </Card.Title>
        <Card.Text>
          <h5>{description}</h5>
          {creator && <small>created by: {creator}</small>}
        </Card.Text>
        <Button variant="dark" as={Link} to={`/tactical_packages/${id}`}>
          View Tac Pack
        </Button>
      </Card.Body>
    </Card>
  )
}

export default TacticalPackageListItem
