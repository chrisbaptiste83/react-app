import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button, Container } from 'react-bootstrap'
import { useDeleteTacticalPackageMutation } from '../store/api'
import type { TacticalPackage } from '../types'

const ListItem: React.FC<TacticalPackage> = ({ id, title, description, creator }) => {
  const [deleteTacticalPackage, { isLoading }] = useDeleteTacticalPackageMutation()
  const navigate = useNavigate()

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this tactical package?')) {
      return
    }

    try {
      await deleteTacticalPackage(id).unwrap()
      navigate('/tactical_packages')
    } catch (error) {
      console.error('Failed to delete tactical package:', error)
    }
  }

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
      </Card.Body>
      <Container className="text-center pb-3">
        <Button variant="danger" onClick={handleDelete} disabled={isLoading}>
          {isLoading ? 'Deleting...' : 'Delete'}
        </Button>
      </Container>
    </Card>
  )
}

export default ListItem
