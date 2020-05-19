import React from 'react';

const TacticalPackage = ({title, description, creator}) => {
  return (
    <li>
      <h1>{title}</h1> - {description}<p><small>created by: {creator}</small></p>
    </li>
  )
}

export default TacticalPackage