import React from 'react'; 
import { Link } from 'react-router-dom'; 
import {Card, Form} from 'react-bootstrap'

const TacticalPackage = ({tacticalPackage:{title, description, creator, secondary_weapon, primary_weapon, lethal_weapon, tactical_item}}) => { 
 
  return (
    <React.Fragment>
      <center>
        <Card style={{ width: '50rem' }}>  
          <Card.Body>
            <Card.Title><h1>{title}</h1></Card.Title> 
            <Card.Text>
              <h4>{description}</h4>
              <small>created by:{creator}</small>
            </Card.Text> 
          </Card.Body>
        </Card><br></br> 
        <Card style={{ width: '50rem' }}>  
          <Card.Body>
            <Card.Title><h2>Primary Weapon:</h2><p><h2>{primary_weapon.name}</h2></p></Card.Title> 
            <p><img src={primary_weapon.image_url} width={500} height={240} alt=""/></p> 
            <Card.Text>
              <h5>{primary_weapon.description}</h5><br></br> 
            </Card.Text> 
          </Card.Body>
        </Card><br></br> 
        <Card style={{ width: '50rem' }}>  
          <Card.Body>
            <Card.Title><h2>Secondary Weapon:</h2><p><h2>{secondary_weapon.name}</h2></p></Card.Title> 
            <p><img src={secondary_weapon.image_url} width={500} height={240} alt=""/></p> 
            <Card.Text>
              <h5>{secondary_weapon.description}</h5><br></br> 
            </Card.Text> 
          </Card.Body>
        </Card><br></br> 
        <Card style={{ width: '50rem' }}>  
          <Card.Body>
            <Card.Title><h2>Lethal Weapon:</h2><p><h2>{lethal_weapon.name}</h2></p></Card.Title> 
            <p><img src={lethal_weapon.image_url} width={500} height={240} alt=""/></p> 
            <Card.Text>
              <h5>{lethal_weapon.description}</h5><br></br> 
            </Card.Text> 
          </Card.Body>
        </Card><br></br>
        <Card style={{ width: '50rem' }}>  
          <Card.Body>
            <Card.Title><h2>Tactical Equipment:</h2><p><h2>{tactical_item.name}</h2></p></Card.Title> 
            <p><img src={tactical_item.image_url} width={500} height={240} alt=""/></p> 
            <Card.Text>
              <h5>{tactical_item.description}</h5><br></br> 
            </Card.Text> 
          </Card.Body>
        </Card><br></br> 
      </center>  
  </React.Fragment>
  )
}

export default TacticalPackage