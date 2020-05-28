import React, { Component } from 'react'; 

class AddPrimaryWeapon extends Component {
  
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
            
            <h3>Primary Weapon:</h3><br></br>  
            <form>
                <p>
                <label htmlFor="name">Name:</label>
                <input 
                  className="border"
                  type="text" 
                    name="name"
                  id= "name"
                  value={this.state.primary_weapon}
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
                  value={this.state.primary_weapon}
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
                  value={this.state.primary_weapon}
                  onChange={this.handleChange}
                />
              </p> 
                <input
                  type="submit" 
                  value="Add Primary Weapon" 
                />
              </form> 
           
          </center> 
        </div>
      ) 
    }
  }
  
  export default AddPrimaryWeapon;

