import React, { Component } from 'react';  
import LethalWeaponsList from '../components/LethalWeaponsList'; 
import { connect } from 'react-redux';
import { fetchLethalWeapons} from '../actions'; 
import {Jumbotron} from 'react-bootstrap'

class LethalWeaponsContainer extends Component { 

    constructor(props) {
        super(props);
    } 

    componentDidMount() {
        this.props.fetchLethalWeapons()
    }
    
    render() {
        return (
          <section> 
            <center>
              <Jumbotron style={{ width: '50rem' }}>  
                <h1> Lethal Weapons: </h1> 
              </Jumbotron>
              <LethalWeaponsList lethalWeapons={this.props.lethalWeapons}/> 
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