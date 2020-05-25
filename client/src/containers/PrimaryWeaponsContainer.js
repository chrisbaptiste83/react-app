import React, { Component } from 'react';  
import PrimaryWeaponsList from '../components/PrimaryWeaponsList'; 
import { connect } from 'react-redux';
import { fetchPrimaryWeapons} from '../actions'; 
import {Jumbotron} from 'react-bootstrap'

class PrimaryWeaponsContainer extends Component { 

  constructor(props) {
    super(props);
    this.renderLoadedContent = this.renderLoadedContent.bind(this)
  } 

  componentDidMount() {
    this.props.fetchPrimaryWeapons()
  } 

  renderLoadedContent() {
    return (
      <React.Fragment>
        <PrimaryWeaponsList primaryWeapons={this.props.primaryWeapons}/>     
      </React.Fragment>
    )
  } 

  render() {
    return (
      <section> 
        <center>
          <Jumbotron style={{ background: 'rgba(0,0,0, 0.5)',color:'white', width: '50rem' }}>  
              <h1> Primary Weapons: </h1> 
              <p>A primary weapon will be your go-to weapon for defense against hungry zombies.</p>
          </Jumbotron>
          {this.props.loading ? 'Loading...' : this.renderLoadedContent()} 
        </center>
      </section>
    )
  }
} 

const mapStateToProps = ({primaryWeapons}) => { 
  
  return { 
    primaryWeapons: primaryWeapons.items.map(primaryWeaponId => primaryWeapons.itemsById[primaryWeaponId]),
    loading: primaryWeapons.loading
  } 
  
}

export default connect(mapStateToProps, { fetchPrimaryWeapons })(PrimaryWeaponsContainer)