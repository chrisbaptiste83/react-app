import React from 'react';
import TacticalPackage from './TacticalPackage';

const TacticalPackagesList = ({tacticalPackages}) => {
  return (
    <React.Fragment>
      {tacticalPackages.map(packageAttributes => <TacticalPackage {...packageAttributes} />)}
    </React.Fragment>
  )
}

export default TacticalPackagesList