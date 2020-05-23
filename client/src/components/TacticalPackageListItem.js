import React from 'react'; 
import { Link } from 'react-router-dom'; 
import {Card} from 'react-bootstrap'

const TacticalPackageListItem = ({id, title, description, creator, primary_weapon}) => { 
 
  return (
    <React.Fragment> 
        <Card style={{ width: '50rem' }}>  
          <Card.Body>
            <Card.Title><h2>{title}</h2></Card.Title> 
            <Card.Text>
              <h5>{description}</h5>
              <small>created by:{creator}</small>
            </Card.Text> 
            <p><img src={primary_weapon.image_url} width={500} height={240} alt="" /></p> 
            <Link to={{ pathname: `/tactical_packages/${id}`}}> View Tac Pack</Link>   
          </Card.Body>
        </Card><br></br>
    </React.Fragment>
  )
}

export default TacticalPackageListItem