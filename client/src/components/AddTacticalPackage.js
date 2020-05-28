import React, { Component } from 'react'; 
import {Jumbotron} from 'react-bootstrap' 
import {addTacticalPackage } from '../actions'; 
import { connect } from 'react-redux'; 
import AddPrimaryWeapon from './AddPrimaryWeapon'; 
import AddSecondaryWeapon from './AddSecondaryWeapon'; 
import AddLethalWeapon from './AddLethalWeapon'; 
import AddTacticalItem from './AddTacticalItem'; 

class AddTacticalPackage extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
    title: '', 
    description: '', 
    creator: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  } 

  handleSubmit(e) {
    e.preventDefault(); 
    this.props.addTacticalPackage(this.state) 
    this.Setstate = ({
      title: '', 
      description: '', 
      creator: ''
      }) 
  }

  render() {
    return ( 
      <div>
        <center> 
          <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '50rem' }}> 
            <h2>Create a Tactical Pack</h2>
          </Jumbotron>
          <Jumbotron style={{ background: 'rgba(0,0,0, 0.75)',color:'white', width: '50rem' }}> 
            <h3>Package Info:</h3><br></br> 
            <form onSubmit={this.handleSubmit}>
              <p>
                <label htmlFor="title">Title</label>
                <input 
                  className="border"
                  type="text" 
                  name="title"
                  id="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <label htmlFor="description">Description:</label>
                <input 
                  className="border"
                  type="text" 
                  name="description"
                  id="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <label htmlFor="creator">Creator:</label>
                <input 
                  className="border"
                  type="text" 
                  name="creator"
                  id="creator"
                  value={this.state.creator}
                  onChange={this.handleChange}
                />
              </p> 
              <input
                type="submit" 
                value="Create Package" 
              />
            </form><br></br> 
            <AddPrimaryWeapon/><br></br> 
            <AddSecondaryWeapon/><br></br> 
            <AddLethalWeapon/><br></br> 
            <AddTacticalItem/><br></br> 
          </Jumbotron> 
        </center> 
      </div>
    ) 
  }
}

export default connect(null, { addTacticalPackage })(AddTacticalPackage);