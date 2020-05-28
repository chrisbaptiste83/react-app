import React, { Component } from 'react'; 

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
    }
  
    render() {
      return ( 
        <div>
          <center> 
            <form>
            <p> 
              <h3>Tactical Equipment:</h3><br></br> 
                <label htmlFor="tactical_item[name]">Name:</label>
                <input 
                  className="border"
                  type="text" 
                  name="tactical_item[name]"
                  id="tactical_item[name]"
                  value={this.state.tactical_item}
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
                  value={this.state.tactical_item}
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
                  value={this.state.tactical_item}
                  onChange={this.handleChange}
                />
            </p> 
            <input
               type="submit" 
               value="Add Tactical Item" 
             />
            </form> 
            </center> 
        </div>
      ) 
    }
  }
  
  export default AddTacticalItem;



