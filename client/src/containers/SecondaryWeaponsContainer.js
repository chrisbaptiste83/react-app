import React, { Component } from 'react';  
import SecondaryWeaponsList from '../components/SecondaryWeaponsList';

class SecondaryWeaponsContainer extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          secondaryWeapons: []
        } 
    } 

    componentDidMount() {
        fetch('http://localhost:3001/secondary_weapons')
          .then(response => response.json())
          .then(secondaryWeapons => { 
            this.setState({ secondaryWeapons: secondaryWeapons })
          })
      }
    
    render() {
        return (
          <section>
            <h1>Secondary Weapons:</h1> 
            <SecondaryWeaponsList secondaryWeapons={this.state.secondaryWeapons}/>
          </section>
        )
    }
} 

export default SecondaryWeaponsContainer;
