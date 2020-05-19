import React from 'react';
import SecondaryWeapon from './SecondaryWeapon';

const SecondaryWeaponsList = ({secondaryWeapons}) => {
  return (
    <ul>
      {secondaryWeapons.map(sweaponAttributes => <SecondaryWeapon {...sweaponAttributes} />)}
    </ul>
  )
}

export default SecondaryWeaponsList