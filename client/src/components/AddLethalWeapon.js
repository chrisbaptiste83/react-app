import React, { Component } from 'react'; 

class AddLethalWeapon extends Component {
  
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
    }
  
    render() {
      return ( 
        <div>
          <center> 
            
            <form>
                <p> 
                <h3>Lethal Weapon:</h3><br></br> 
                    <label htmlFor="name">Name:</label>
                    <input 
                    className="border"
                    type="name" 
                    name="name"
                    id="name"
                    value={this.state.lethal_weapon}
                    onChange={this.handleChange}
                    />
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <input 
                    className="border"
                    type="text" 
                    name="description"
                    id="description"
                    value={this.state.lethal_weapon}
                    onChange={this.handleChange}
                    />
                </p>
                <p>
                    <label htmlFor="image_url">Image URL:</label>
                    <input 
                    className="border"
                    type="text" 
                    name="image_url"
                    id="image_url"
                    value={this.state.lethal_weapon}
                    onChange={this.handleChange}
                    />
                </p> 
                <input
                type="submit" 
                value="Add Lethal Weapon" 
                />
            </form> 
           
          </center> 
        </div>
      ) 
    }
  }
  
  export default AddLethalWeapon;


              