import React from 'react';
import PrimaryWeapon from './PrimaryWeapon';

const PrimaryWeaponsList = ({primaryWeapons}) => {
  return (
    <React.Fragment>
      {primaryWeapons.map(pweaponAttributes => <PrimaryWeapon {...pweaponAttributes} />)}
    </React.Fragment>
  )
}

export default PrimaryWeaponsList