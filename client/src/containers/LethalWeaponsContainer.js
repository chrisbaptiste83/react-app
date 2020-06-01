import React, { Component } from 'react';  
import LethalWeaponsList from '../components/LethalWeaponsList'; 
import { connect } from 'react-redux';
import { fetchLethalWeapons} from '../actions'; 
import {Jumbotron} from 'react-bootstrap'

class LethalWeaponsContainer extends Component { 

    constructor(props) {
        super(props); 
        this.renderLoadedContent = this.renderLoadedContent.bind(this)
    } 

    componentDidMount() {
        this.props.fetchLethalWeapons()
    } 

  renderLoadedContent() {
    return (
      <React.Fragment>
       <LethalWeaponsList lethalWeapons={this.props.lethalWeapons}/>   
      </React.Fragment>
    )
  } 
    
    render() {
        return (
          <section> 
            <center>
              <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '65rem' }}>  
                <h1> Lethal Weapons: </h1> 
                <p>Designed to strategically take out one or more zombies with minimal effort on your part. Great for setting up defensive positions.</p>
              </Jumbotron> 
              {this.props.loading ? 'Loading...': this.renderLoadedContent()}  
            </center>
          </section>
        )
    }
} 

const mapStateToProps = ({lethalWeapons}) => {
  return {
    lethalWeapons: lethalWeapons.items.map(lethalWeaponId => lethalWeapons.itemsById[lethalWeaponId]),
    loading: lethalWeapons.loading
  }
}

export default connect(mapStateToProps, { fetchLethalWeapons })(LethalWeaponsContainer)