import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useAddTacticalItemMutation } from '../store/api'

interface AddTacticalItemProps {
  id: number
}

const AddTacticalItem: React.FC<AddTacticalItemProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  })
  const [addTacticalItem, { isLoading }] = useAddTacticalItemMutation()
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await addTacticalItem({
        ...formData,
        tactical_package_id: id,
      } as any).unwrap()
      navigate('/tactical_packages')
    } catch (error) {
      console.error('Failed to add tactical item:', error)
    }
  }

  return (
    <Container>
      <div style={{ background: 'rgba(0,0,0, 0.75)', color: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
        <h3>Tactical Equipment:</h3>
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              <h4>Name:</h4>
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <h4>Description:</h4>
            </Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Tactical Item'}
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default AddTacticalItem
