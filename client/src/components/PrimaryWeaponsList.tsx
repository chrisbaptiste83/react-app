import React from 'react'
import PrimaryWeapon from './PrimaryWeapon'
import type { PrimaryWeapon as PrimaryWeaponType } from '../types'

interface PrimaryWeaponsListProps {
  primaryWeapons: PrimaryWeaponType[]
}

const PrimaryWeaponsList: React.FC<PrimaryWeaponsListProps> = ({ primaryWeapons }) => {
  return (
    <>
      {primaryWeapons.map(weapon => (
        <PrimaryWeapon key={weapon.id} {...weapon} />
      ))}
    </>
  )
}

export default PrimaryWeaponsList
