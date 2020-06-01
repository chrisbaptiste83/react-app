import React from 'react'; 
import { Link } from 'react-router-dom'; 
import {Card, Button} from 'react-bootstrap'

const PackageListItem = ({id, title, description, creator}) => { 
  return (
    <React.Fragment> 
        <Card style={{ background: 'rgba(0,0,0, 0.85)',color:'white', width: '65rem' }}>  
          <Card.Body>
            <Card.Title><h2>{title}</h2></Card.Title> 
            <Card.Text>
              <h5>{description}</h5>
              <small>created by:{creator}</small>
            </Card.Text> 
            <Button style={{ background: 'black'}}><Link to={{ pathname: `/tactical_packages/${id}/add_equipment`}}> Add Equipment</Link></Button> 
          </Card.Body>
        </Card><br></br>
    </React.Fragment>
  ) 
}

export default PackageListItem