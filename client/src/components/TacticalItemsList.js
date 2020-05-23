import React from 'react';
import TacticalItem from './TacticalItem';

const TacticalItemsList = ({tacticalItems}) => {
  return (
    <React.Fragment> 
      {tacticalItems.map(tItemAttributes => <TacticalItem {...tItemAttributes} />)} 
    </React.Fragment>
  )
}

export default TacticalItemsList