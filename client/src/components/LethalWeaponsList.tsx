import React from 'react'
import LethalWeapon from './LethalWeapon'
import type { LethalWeapon as LethalWeaponType } from '../types'

interface LethalWeaponsListProps {
  lethalWeapons: LethalWeaponType[]
}

const LethalWeaponsList: React.FC<LethalWeaponsListProps> = ({ lethalWeapons }) => {
  return (
    <>
      {lethalWeapons.map(weapon => (
        <LethalWeapon key={weapon.id} {...weapon} />
      ))}
    </>
  )
}

export default LethalWeaponsList
