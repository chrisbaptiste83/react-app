import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'; 
import {deleteTacticalPackage} from '../actions/index.js'; 
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom'; 


class ListItem extends Component { 

constructor(props) {
  super(props); 
  this.handleOnClick = this.handleOnClick.bind(this)
}        

handleOnClick = () => {
  this.props.deleteTacticalPackage(this.props.id) 
  .then(() => { 
    this.props.history.push('/tactical_packages')
  })  
}
    

  render() {   
    const {title, description, creator} = this.props;
    return (
      <React.Fragment> 
          <Card style={{ background: 'rgba(0,0,0, 0.85)',color:'white', width: '65rem' }}>  
            <Card.Body>
              <Card.Title><h2>{title}</h2></Card.Title> 
              <Card.Text>
                <h5>{description}</h5>
                <small>created by:{creator}</small>
              </Card.Text> 
            </Card.Body>
            <center> 
              <Button style={{ background: 'black', width: '5rem'}} onClick={this.handleOnClick}>Delete</Button>
            </center>  
          </Card><br></br>
      </React.Fragment>
    ) 
  } 
}

export default withRouter(connect (null, {deleteTacticalPackage})(ListItem));