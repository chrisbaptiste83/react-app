import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Alert } from 'react-bootstrap'
import { useGetTacticalPackageQuery } from '../store/api'
import AddPrimaryWeapon from './AddPrimaryWeapon'
import AddSecondaryWeapon from './AddSecondaryWeapon'
import AddLethalWeapon from './AddLethalWeapon'
import AddTacticalItem from './AddTacticalItem'
import ListItem from './ListItem'

const AddPackEquipment: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data: tacticalPackage, isLoading, error } = useGetTacticalPackageQuery(Number(id))

  if (error) {
    return (
      <Container className="mt-5 text-center">
        <Alert variant="danger">Failed to load tactical package</Alert>
      </Container>
    )
  }

  if (isLoading || !tacticalPackage) {
    return (
      <Container className="mt-5 text-center">
        <div className="text-white">Loading...</div>
      </Container>
    )
  }

  return (
    <section className="mt-5 pt-5">
      <Container className="text-center">
        <ListItem {...tacticalPackage} />
        <br />
        <AddPrimaryWeapon {...tacticalPackage} />
        <br />
        <AddSecondaryWeapon {...tacticalPackage} />
        <br />
        <AddLethalWeapon {...tacticalPackage} />
        <br />
        <AddTacticalItem {...tacticalPackage} />
      </Container>
    </section>
  )
}

export default AddPackEquipment
