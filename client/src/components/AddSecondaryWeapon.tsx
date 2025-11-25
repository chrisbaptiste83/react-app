import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useAddSecondaryWeaponMutation } from '../store/api'

interface AddSecondaryWeaponProps {
  id: number
}

const AddSecondaryWeapon: React.FC<AddSecondaryWeaponProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  })
  const [addSecondaryWeapon, { isLoading, isSuccess }] = useAddSecondaryWeaponMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await addSecondaryWeapon({
        ...formData,
        tactical_package_id: id,
      } as any).unwrap()
    } catch (error) {
      console.error('Failed to add secondary weapon:', error)
    }
  }

  return (
    <Container>
      <div style={{ background: 'rgba(0,0,0, 0.75)', color: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
        <h3>Secondary Weapon:</h3>
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

          <Button variant="primary" type="submit" disabled={isLoading || isSuccess}>
            {isSuccess ? 'Added!' : isLoading ? 'Adding...' : 'Add Secondary Weapon'}
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default AddSecondaryWeapon
