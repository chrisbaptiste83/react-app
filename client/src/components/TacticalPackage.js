import React from 'react'; 
import { Link } from 'react-router-dom';

const TacticalPackage = ({ id, title, description, creator, primary_weapon}) => { 
 

  return (
    <React.Fragment>
      <h1>{title}</h1> - {description} 
      <p><small>created by: {creator}</small></p> 
      <Link to={{
          pathname: `/tactical_packages/${id}`
        }}>
          View Tac Pack
        </Link>
    </React.Fragment>
  )
}

export default TacticalPackage