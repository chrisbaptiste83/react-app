import React from 'react';
import { Navbar, Nav} from 'react-bootstrap'; 
import { Link } from 'react-router-dom'; 
import { logoutUser } from '../actions';
import { connect } from "react-redux"


const Navigation = (props) => {  

  const handleClick = () => { 
    const { logoutUser, isLoggedIn} = props; 
    if (isLoggedIn) {
        logoutUser()
    }
  }

  return (
    <div>
      <Navbar  variant="dark" fixed="top" style={{ height: '6rem', background:'rgba(0,0,0, 0.60)'}}> 
      {/* {props.isLoggedIn ? <Nav.Link style={{ color: '#FFF' }}><h2>Logged In as {props.user.user.username}</h2></Nav.Link> : null} */}
      <Nav.Link><Link to={{ pathname: `/`}} style={{ color: '#FFF' }}><h2>Home</h2></Link></Nav.Link>               
      <Nav.Link><Link to={{ pathname: `/tactical_packages/`}} style={{ color: '#FFF' }}><h2>Zombie Tactical Packs</h2></Link></Nav.Link>
      <Nav.Link><Link to={{ pathname: `/primary_weapons/`}} style={{ color: '#FFF' }}><h2>Primary Weapons</h2></Link></Nav.Link>   
      <Nav.Link><Link to={{ pathname: `/secondary_weapons/`}} style={{ color: '#FFF' }}><h2>Secondary Weapons</h2></Link></Nav.Link>     
      <Nav.Link><Link to={{ pathname: `/lethal_weapons/`}} style={{ color: '#FFF' }}><h2>Lethal Weapons</h2></Link></Nav.Link>     
      <Nav.Link><Link to={{ pathname: `/tactical_items/`}} style={{ color: '#FFF' }}><h2>Tactical Items</h2></Link></Nav.Link> 
      {props.isLoggedIn ? null : <Nav.Link><Link to={{ pathname: `/login`}} style={{ color: '#FFF' }}><h2>Log In</h2></Link></Nav.Link>} 
      {props.isLoggedIn ? null : <Nav.Link><Link to={{ pathname: `/sign_up`}} style={{ color: '#FFF' }}><h2>Sign Up</h2></Link></Nav.Link>}
      {props.isLoggedIn ? <Nav.Link><Link to={{ pathname: `/tactical_packages/new`}} style={{ color: '#FFF' }}><h2>Create</h2></Link></Nav.Link>: null}           
      {props.isLoggedIn ? <Nav.Link><Link to="/" onClick={(e) => handleClick(e)} style={{ color: '#FFF' }}><h2>Logout</h2></Link></Nav.Link> : null}        
      </Navbar>
    </div>
  )
}
export default connect(null, { logoutUser })(Navigation)