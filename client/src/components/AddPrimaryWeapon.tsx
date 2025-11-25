import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useAddPrimaryWeaponMutation } from '../store/api'

interface AddPrimaryWeaponProps {
  id: number
}

const AddPrimaryWeapon: React.FC<AddPrimaryWeaponProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  })
  const [addPrimaryWeapon, { isLoading, isSuccess }] = useAddPrimaryWeaponMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await addPrimaryWeapon({
        ...formData,
        tactical_package_id: id,
      } as any).unwrap()
    } catch (error) {
      console.error('Failed to add primary weapon:', error)
    }
  }

  return (
    <Container>
      <div style={{ background: 'rgba(0,0,0, 0.75)', color: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
        <h3>Primary Weapon:</h3>
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
            {isSuccess ? 'Added!' : isLoading ? 'Adding...' : 'Add Primary Weapon'}
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default AddPrimaryWeapon
