import React, { Component } from 'react';  
import SecondaryWeaponsList from '../components/SecondaryWeaponsList'; 
import { connect } from 'react-redux';
import { fetchSecondaryWeapons} from '../actions'; 
import {Jumbotron} from 'react-bootstrap'


class SecondaryWeaponsContainer extends Component { 

    constructor(props) {
        super(props);
    } 

    componentDidMount() {
        this.props.fetchSecondaryWeapons()
    }
    
    render() {
        return (
          <section> 
            <center>
              <Jumbotron style={{ width: '50rem' }}>  
                <h1> Secondary Weapons: </h1> 
              </Jumbotron>
              <SecondaryWeaponsList secondaryWeapons={this.props.secondaryWeapons}/> 
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
