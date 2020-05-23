import React, { Component } from 'react'; 
import {Jumbotron} from 'react-bootstrap' 
import {addTacticalPackage, ADD_TACTICALPACK } from '../actions'; 
import { connect } from 'react-redux';


class AddTacticalPackage extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      title: '', 
      description: '', 
      creator: '',
      primary_weapon: {name:'', description:'', image_url:'',},
      secondary_weapon: {name:'', description:'', image_url:'',},
      lethal_weapon: {name:'', description:'', image_url:'',}, 
      tactical_item: {name:'', description:'', image_url:'',}
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
    .then(() => {
      this.props.history.push('/tactical_packages')
    })
  }

  render() {
    return ( 
      <div>
      <center> 
      <Jumbotron style={{ width: '50rem' }}> 
      <h2>Create a Tactical Pack</h2>
      </Jumbotron>
      <Jumbotron style={{ width: '50rem' }}> 
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
        <p> 
        <h3>Primary Weapon:</h3><br></br> 
          <label htmlFor="primary_weapon[name]">Name:</label>
          <input 
            className="border"
            type="text" 
            name="primary_weapon.name"
            id="primary_weapon[name]"
            value={this.state.primary_weapon.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="primary_weapon[description]">Description</label>
          <input 
            className="border"
            type="text" 
            name="primary_weapon[description]"
            id="primary_weapon[description]"
            value={this.state.primary_weapon.description}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="primary_weapon[image_url]">Image URL:</label>
          <input 
            className="border"
            type="text" 
            name="primary_weapon[image_url]"
            id="primary_weapon[image_url]"
            value={this.state.primary_weapon.image_url}
            onChange={this.handleChange}
          />
        </p> 
        <p> 
        <h3>Secondary Weapon:</h3><br></br> 
          <label htmlFor="secondary_weapon[name]">Name:</label>
          <input 
            className="border"
            type="text" 
            name="secondary_weapon[name]"
            id="secondary_weapon[name]"
            value={this.state.secondary_weapon.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="secondary_weapon[description]">Description</label>
          <input 
            className="border"
            type="text" 
            name="secondary_weapon[description]"
            id="seondary_weapon[description]"
            value={this.state.secondary_weapon.description}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="secondary_weapon[image_url]">Image URL:</label>
          <input 
            className="border"
            type="text" 
            name="secondary_weapon[image_url]"
            id="secondary_weapon[image_url]"
            value={this.state.secondary_weapon.image_url}
            onChange={this.handleChange}
          />
        </p> 
        <p> 
        <h3>Lethal Weapon:</h3><br></br> 
          <label htmlFor="lethal_weapon[name]">Name:</label>
          <input 
            className="border"
            type="text" 
            name="lethal_weapon[name]"
            id="lethal_weapon[name]"
            value={this.state.lethal_weapon.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="lethal_weapon[description]">Description</label>
          <input 
            className="border"
            type="text" 
            name="lethal_weapon[description]"
            id="lethal_weapon[description]"
            value={this.state.lethal_weapon.description}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="lethal_weapon[image_url]">Image URL:</label>
          <input 
            className="border"
            type="text" 
            name="lethal_weapon[image_url]"
            id="lethal_weapon[image_url]"
            value={this.state.lethal_weapon.image_url}
            onChange={this.handleChange}
          />
        </p> 
        <p> 
        <h3>Tactical Equipment:</h3><br></br> 
          <label htmlFor="tactical_item[name]">Name:</label>
          <input 
            className="border"
            type="text" 
            name="tactical_item[name]"
            id="tactical_item[name]"
            value={this.state.tactical_item.image_url}
            onChange={this.handleChange}
          />
        </p> 
        <p>
          <label htmlFor="tactical_item[description]">Description</label>
          <input 
            className="border"
            type="text" 
            name="tactical_item[description]"
            id="tactical_item[description]"
            value={this.state.tactical_item.description}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="tactical_item[image_url]">Image URL:</label>
          <input 
            className="border"
            type="text" 
            name="tactical_item[image_url]"
            id="tactical_item[image_url]"
            value={this.state.tactical_item.image_url}
            onChange={this.handleChange}
          />
        </p>
        <input
          type="submit" 
          value="Submit" 
        />
      </form> 
      </Jumbotron> 
      </center> 
      </div>
    ) 
  }
}

export default connect(null, { addTacticalPackage })(AddTacticalPackage);