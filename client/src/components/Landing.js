import React from 'react'; 
import {Button, Jumbotron} from 'react-bootstrap';


const Landing = () => {
    return (  
        <section> 
            <center>
            <Jumbotron style={{ width: '50rem'}}>
  <h1>Zombie Apocalypse Tactical Packs</h1>
  <p>
    Share your favorite tactical packages and prepare for doomsday like no other.
  </p>
  <p>
    <Button variant="primary">Browse Tactical Packages</Button>
  </p>
</Jumbotron> 
</center>
        </section>
    )
} 

export default Landing