import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
import { useAddTacticalPackageMutation } from '../store/api'

const AddTacticalPackage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    creator: '',
  })
  const [addTacticalPackage, { isLoading }] = useAddTacticalPackageMutation()
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await addTacticalPackage(formData).unwrap()
      navigate(`/tactical_packages/${result.id}/add_equipment`)
    } catch (error) {
      console.error('Failed to create tactical package:', error)
    }
  }

  return (
    <section className="mt-5 pt-5">
      <Container className="text-center">
        <div style={{ background: 'rgba(0,0,0, 0.75)', color: 'white', padding: '2rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
          <h2>Create a Tactical Pack</h2>
          <h4>Create a tactical package first, then add weapons and equipment.</h4>
        </div>
        <div style={{ background: 'rgba(0,0,0, 0.75)', color: 'white', padding: '2rem', borderRadius: '0.5rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2>Tactical Package Details:</h2>
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>
                <h3>Title</h3>
              </Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <h3>Description:</h3>
              </Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <h3>Creator:</h3>
              </Form.Label>
              <Form.Control
                type="text"
                name="creator"
                value={formData.creator}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Creating...' : 'Create Package'}
            </Button>
          </Form>
        </div>
      </Container>
    </section>
  )
}

export default AddTacticalPackage
