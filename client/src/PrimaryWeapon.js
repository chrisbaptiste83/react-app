import React from 'react';

const PrimaryWeapon = ({name, description, image_url}) => {
  return (
    <li>
      <h1>{name}</h1> - {description}<p><img 
      src={image_url} 
        width={500}
        height={240}
      /></p>
    </li>
  )
}

export default PrimaryWeapon