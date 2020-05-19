import React, { Component } from 'react';  
import PrimaryWeaponsList from './PrimaryWeaponsList';

class PrimaryWeaponsContainer extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          primaryWeapons: []
        } 
    } 

    componentDidMount() {
        fetch('http://localhost:3001/primary_weapons')
          .then(response => response.json())
          .then(primaryWeapons => { 
            this.setState({ primaryWeapons: primaryWeapons })
          })
      }
    
    render() {
        return (
          <section>
            <h1>Primary Weapons:</h1> 
            <PrimaryWeaponsList primaryWeapons={this.state.primaryWeapons}/>
          </section>
        )
    }
} 

export default PrimaryWeaponsContainer;
