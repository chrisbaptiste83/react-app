import React, { Component } from 'react'; 
import {Jumbotron} from 'react-bootstrap' 
import {addTacticalPackage } from '../actions'; 
import { connect } from 'react-redux'; 

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
    let newTacPack = Object.assign({}, this.state, {
      user_id: this.props.user.user.id
    }) 
    this.props.addTacticalPackage(newTacPack)
      .then(res => { 
        this.props.history.push(`/tactical_packages`)
      })  
    this.setState({ 
      submitted:true
      }) 
  }

  render() {
    return ( 
      <div>
        <center> 
          <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '75rem' }}> 
            <h2>Create a Tactical Pack</h2>
            <h4>Create a tactical package first, then add weapons and equipment.</h4>
          </Jumbotron>
          <Jumbotron style={{ background: 'rgba(0,0,0, 0.75)',color:'white', width: '75rem' }}> 
            <h2>Tactical Package Details:</h2><br></br> 
            <form onSubmit={this.handleSubmit}>
              <p>
                <label htmlFor="title"><h3>Title</h3></label><br></br>
                <input 
                  style={{width: "725px"}} 
                  className="border"
                  type="text" 
                  name="title"
                  id="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <label htmlFor="description"><h3>Description:</h3></label><br></br>
                <input 
                  style={{width: "725px"}}
                  className="border"
                  type="text" 
                  name="description"
                  id="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <label htmlFor="creator"><h3>Creator:</h3></label><br></br>
                <input 
                  style={{width: "725px"}}
                  className="border"
                  type="text" 
                  name="creator"
                  id="creator"
                  value={this.state.creator}
                  onChange={this.handleChange}
                />
              </p><br></br>
              <input 
                disabled={this.state.submitted}
                type="submit" 
                value="Create Package" 
              />
            </form> 
          </Jumbotron> 
        </center> 
      </div>
    ) 
  }
}

const mapStateToProps = ( {usersReducer} ) => {
  const {user} = usersReducer 
  return { 
      user: user 
  }  
}

export default connect(mapStateToProps, { addTacticalPackage })(AddTacticalPackage);