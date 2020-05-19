import React from 'react';
import TacticalItem from './TacticalItem';

const TacticalItemsList = ({tacticalItems}) => {
  return (
    <ul>
      {tacticalItems.map(tItemAttributes => <TacticalItem {...tItemAttributes} />)}
    </ul>
  )
}

export default TacticalItemsList