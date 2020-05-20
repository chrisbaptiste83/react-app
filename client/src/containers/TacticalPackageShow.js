import React, { Component } from 'react';  
import TacticalPackage from '../components/TacticalPackage'; 
import PrimaryWeapon from '../components/PrimaryWeapon'; 
import SecondaryWeapon from '../components/SecondaryWeapon'; 
import LethalWeapon from '../components/LethalWeapon'; 
import TacticalItem from '../components/TacticalItem'; 

class TacticalPackageShow extends Component { 

  constructor(props) {
      super(props);
      this.state = {
        tacticalPackage: []
      } 
  } 

  componentDidMount() {
      fetch('http://localhost:3001/tactical_packages/1')
        .then(response => response.json())
        .then(tacticalPackage => { 
          this.setState({ tacticalPackage: tacticalPackage })
        })
    } 

  render() {
      return ( 
        <section>
          <h1>Tactical Package Name:</h1>  
          <h1>{this.state.tacticalPackage.title}</h1> 
          <small>created by:{this.state.tacticalPackage.creator}</small> 
          <h2>Primary Weapon</h2> 
          <PrimaryWeapon {...this.state.tacticalPackage.primary_weapon} /> 
          <h1>Secondary Weapon:</h1>  
          <SecondaryWeapon {...this.state.tacticalPackage.secondary_weapon} /> 
          <h2>Lethal Weapon</h2> 
          <LethalWeapon {...this.state.tacticalPackage.lethal_weapon} />  
          <h2>Tactical Equipment</h2> 
          <TacticalItem {...this.state.tacticalPackage.tactical_item} /> 
        </section>
      )
  }
} 

export default TacticalPackageShow;