import React from 'react';
import LethalWeapon from './LethalWeapon';

const LethalWeaponsList = ({lethalWeapons}) => {
  return (
    <ul>
      {lethalWeapons.map(lweaponAttributes => <LethalWeapon {...lweaponAttributes} />)}
    </ul>
  )
}

export default LethalWeaponsList