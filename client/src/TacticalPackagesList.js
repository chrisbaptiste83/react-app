import React from 'react';
import TacticalPackage from './TacticalPackage';

const TacticalPackagesList = ({tacticalPackages}) => {
  return (
    <ul>
      {tacticalPackages.map(packageAttributes => <TacticalPackage {...packageAttributes} />)}
    </ul>
  )
}

export default TacticalPackagesList