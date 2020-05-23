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
          <Jumbotron style={{ width: '50rem' }}>  
              <h1> Primary Weapons: </h1> 
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