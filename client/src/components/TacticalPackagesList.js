import React from 'react';
import TacticalPackageListItem from './TacticalPackageListItem';

const TacticalPackagesList = ({tacticalPackages}) => { 
  return (
    <React.Fragment>
      {tacticalPackages.map(packageAttributes => <TacticalPackageListItem {...packageAttributes} />)}
    </React.Fragment>
  )
}

export default TacticalPackagesList