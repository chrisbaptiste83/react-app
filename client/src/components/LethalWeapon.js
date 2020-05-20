import React from 'react';

const LethalWeapon = ({name, description, image_url}) => {
  return (
    <React.Fragment>
      <h1>{name}</h1> - {description}<p><img 
      src={image_url} 
        width={500}
        height={240} 
      alt =""  
      /></p>
    </React.Fragment>
  )
}

export default LethalWeapon