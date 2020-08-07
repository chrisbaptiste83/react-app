import React, { Component } from 'react';  
import SecondaryWeaponsList from '../components/SecondaryWeaponsList'; 
import { connect } from 'react-redux';
import { fetchSecondaryWeapons} from '../actions'; 
import {Jumbotron} from 'react-bootstrap'


class SecondaryWeaponsContainer extends Component { 

  constructor(props) {
      super(props); 
      this.renderLoadedContent = this.renderLoadedContent.bind(this)
  } 

  componentDidMount() {
      this.props.fetchSecondaryWeapons()
  } 

  renderLoadedContent() {
    return (
      <React.Fragment>
        <SecondaryWeaponsList secondaryWeapons={this.props.secondaryWeapons}/>     
      </React.Fragment>
    )
  } 
    
  render() {
    return (
      <section> 
        <center>
          <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '65rem' }}>  
            <h1>Secondary Weapons:</h1> 
            <p>Your secondary weapon will be your back up in case you happen to run out of ammo for your primary or you manage to lose it.</p>  
          </Jumbotron> 
          {this.props.loading ? 'Loading...': this.renderLoadedContent()} 
        </center>
      </section>
    )
  }
} 

const mapStateToProps = ({secondaryWeapons}) => {
  return {
    secondaryWeapons: secondaryWeapons.items.map(secondaryWeaponId => secondaryWeapons.itemsById[secondaryWeaponId]),
    loading: secondaryWeapons.loading
  }
}

export default connect(mapStateToProps, { fetchSecondaryWeapons })(SecondaryWeaponsContainer)
