import React from 'react'
import SecondaryWeapon from './SecondaryWeapon'
import type { SecondaryWeapon as SecondaryWeaponType } from '../types'

interface SecondaryWeaponsListProps {
  secondaryWeapons: SecondaryWeaponType[]
}

const SecondaryWeaponsList: React.FC<SecondaryWeaponsListProps> = ({ secondaryWeapons }) => {
  return (
    <>
      {secondaryWeapons.map(weapon => (
        <SecondaryWeapon key={weapon.id} {...weapon} />
      ))}
    </>
  )
}

export default SecondaryWeaponsList
