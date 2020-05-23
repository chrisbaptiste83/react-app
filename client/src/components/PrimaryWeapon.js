import React from 'react'; 
import {Card} from 'react-bootstrap'

const PrimaryWeapon = ({name, description, image_url}) => {
  return (
    <React.Fragment> 
      <Card style={{ width: '50rem' }}>  
      <Card.Body>
      <Card.Title><h2>{name}</h2></Card.Title> 
      <Card.Text><h5>{description}</h5></Card.Text> 
      <p><img 
      src={image_url} 
        width={500}
        height={240}
        alt=""
      /></p>   
        </Card.Body>
        </Card><br></br>
    </React.Fragment>
  )
}

export default PrimaryWeapon