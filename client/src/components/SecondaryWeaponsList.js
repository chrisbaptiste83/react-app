import React from 'react';
import SecondaryWeapon from './SecondaryWeapon';

const SecondaryWeaponsList = ({secondaryWeapons}) => {
  return (
    <React.Fragment>
      {secondaryWeapons.map(sweaponAttributes => <SecondaryWeapon {...sweaponAttributes} />)}
    </React.Fragment>
  )
}

export default SecondaryWeaponsList