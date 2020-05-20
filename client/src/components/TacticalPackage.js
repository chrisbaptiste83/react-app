import React from 'react'; 
import { Link } from 'react-router-dom';

const TacticalPackage = ({title, description, creator, primary_weapon}) => {
  return (
    <React.Fragment>
      <h1>{title}</h1> - {description} 
      <p>
      <img src={primary_weapon.image_url} 
        width={500}
        height={240}
        alt =""
      /></p> 
      <p><small>{primary_weapon.name}</small></p> 
      <p><small>created by: {creator}</small></p> 
      <Link to={{
          pathname: `/tactical_packages/id`
        }}>
          View Tac Pack
        </Link>
    </React.Fragment>
  )
}

export default TacticalPackage