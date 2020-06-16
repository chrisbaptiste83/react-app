import React, { Component } from 'react';  
import {Card, Button} from 'react-bootstrap'

class PrimaryWeapon extends Component  { 

  constructor(props) {
    super(props); 
    this.state = {
      buttonCount: 0,
    };
  } 

  handleOnClick = () => { 
    this.setState({buttonCount:this.state.buttonCount + 1 });
  }

    render (){  
      const {name, description, image_url} = this.props;
      return(
        <React.Fragment> 
          <Card style={{ background: 'rgba(0,0,0, 0.85)',color:'white', width: '65rem' }}>  
            <Card.Body>
              <Card.Title><h2>{name}</h2></Card.Title> 
              <Card.Text><h5>{description}</h5></Card.Text> 
              <p><img src={image_url} width={500} height={240} alt="" /></p>  
              <Button style={{ background: 'black'}}onClick={this.handleOnClick}> Click Me {this.state.buttonCount}</Button>  
            </Card.Body>
          </Card><br></br>
        </React.Fragment> 
      )
    } 
}


export default PrimaryWeapon