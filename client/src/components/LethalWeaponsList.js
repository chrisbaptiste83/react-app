import React from 'react';
import LethalWeapon from './LethalWeapon';

const LethalWeaponsList = ({lethalWeapons}) => {
  return (
    <React.Fragment>
      {lethalWeapons.map(lweaponAttributes => <LethalWeapon {...lweaponAttributes} />)}
    </React.Fragment>
  )
}

export default LethalWeaponsList