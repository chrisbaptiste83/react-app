import React from 'react';
import PrimaryWeapon from './PrimaryWeapon';

const PrimaryWeaponsList = ({primaryWeapons}) => {
  return (
    <ul>
      {primaryWeapons.map(pweaponAttributes => <PrimaryWeapon {...pweaponAttributes} />)}
    </ul>
  )
}

export default PrimaryWeaponsList