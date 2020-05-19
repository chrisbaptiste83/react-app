import React, { Component } from 'react';  
import LethalWeaponsList from './LethalWeaponsList';

class LethalWeaponsContainer extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          lethalWeapons: []
        } 
    } 

    componentDidMount() {
        fetch('http://localhost:3001/lethal_weapons')
          .then(response => response.json())
          .then(lethalWeapons => { 
            this.setState({ lethalWeapons: lethalWeapons })
          })
      }
    
    render() {
        return (
          <section>
            <h1>Lethal Weapons:</h1> 
            <LethalWeaponsList lethalWeapons={this.state.lethalWeapons}/>
          </section>
        )
    }
} 

export default LethalWeaponsContainer;
