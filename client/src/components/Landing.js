import React from 'react'; 
import {Button, Jumbotron} from 'react-bootstrap'; 
import { Link } from 'react-router-dom'


const Landing = () => {
  return (  
        <section> 
          <center>
            <Jumbotron style={{ background: 'rgba(0,0,0, 0.65)', width: '80rem', color:'white'}}>
              <h1>Zombie Apocalypse Tactical Packs</h1><br></br><br></br>
              <h4>Log In or Sign Up to start sharing your favorite tactical packages and prepare for doomsday like no other.</h4><br></br> 
              <p><Button variant="dark" size="lg"><Link to={{pathname: `/login`}}>Log In</Link></Button></p><br></br>
              <p><Button variant="dark" size="lg"><Link to={{pathname: `/sign_up`}}>Sign Up</Link></Button></p><br></br>
              <p><Button variant="dark" size="lg"><Link to={{pathname: `/tactical_packages`}}>See Tactical Packs</Link></Button></p><br></br>
            </Jumbotron>
          </center>
        </section>   
  )
} 

export default Landing