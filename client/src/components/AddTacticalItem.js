import React, { Component } from 'react'; 
import {addTacticalItem} from '../actions'; 
import { connect } from 'react-redux'; 
import {Jumbotron} from 'react-bootstrap'; 
import { withRouter } from 'react-router-dom';  


class AddTacticalItem extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name:'', 
      description:'', 
      image_url:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  } 
  
  handleSubmit(e) {
    e.preventDefault(); 
    let newTacticalItem = Object.assign({}, this.state, {
      tactical_package_id: this.props.id 
    })
    this.props.addTacticalItem(newTacticalItem) 
    .then(res => { 
      this.props.history.push(`/tactical_packages`)
    })  
  }
  
  render() {
    return ( 
      <div>
        <center> 
        <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '65rem' }}>  
          <form onSubmit={this.handleSubmit}>
          <p> 
            <h3>Tactical Equipment:</h3><br></br> 
              <label htmlFor="name"><h4>Name:</h4></label><br></br>
              <input 
                style={{width: "700px"}}
                className="border"
                type="text" 
                name="name"
                id="name"
                value={this.state.namedescriptionimage_url}
                onChange={this.handleChange}
              />
          </p> 
          <p>
              <label htmlFor="description"><h4>Description:</h4></label><br></br>
              <input
                style={{width: "700px"}} 
                className="border"
                type="text" 
                name="description"
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
          </p>
          <p>
              <label htmlFor="image_url"><h4>Image URL:</h4></label><br></br>
              <input 
                style={{width: "700px"}}
                className="border"
                type="text" 
                name="image_url"
                id="image_url"
                value={this.state.image_url}
                onChange={this.handleChange}
              />
          </p><br></br> 
          <input 
              disabled={this.state.submitted}
              type="submit" 
              value="Add Tactical Item" 
            />
          </form><br></br> 
        </Jumbotron>
        </center> 
            
      </div>
    ) 
  }
}
  
export default withRouter(connect(null, { addTacticalItem })(AddTacticalItem));



