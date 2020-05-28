import React, { Component } from 'react'; 

class AddSecondaryWeapon extends Component {
  
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
              <h3>Secondary Weapon:</h3><br></br> 
                <label htmlFor="name">Name:</label>
                <input 
                  className="border"
                  type="text" 
                  name="name"
                  id="name"
                  value={this.state.secondary_weapon}
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
                  value={this.state.secondary_weapon}
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
                  value={this.state.secondary_weapon}
                  onChange={this.handleChange}
                />
            </p> 
                <input
                  type="submit" 
                  value="Add Secondary Weapon" 
                />
              </form> 
            
          </center> 
        </div>
      ) 
    }
  }
  
  export default AddSecondaryWeapon;


           
           
              