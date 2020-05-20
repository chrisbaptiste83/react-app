import React, { Component } from 'react';  
import TacticalPackagesList from '../components/TacticalPackagesList';

class TacticalPackagesContainer extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          tacticalPackages: []
        } 
    } 

    componentDidMount() {
        fetch('http://localhost:3001/tactical_packages')
          .then(response => response.json())
          .then(tacticalPackages => { 
            this.setState({ tacticalPackages: tacticalPackages })
          })
      } 


    render() {
        return (
          <section>
            <h1>Tactical Packages:</h1> 
            <TacticalPackagesList tacticalPackages={this.state.tacticalPackages}/>
          </section>
        )
    }
} 

export default TacticalPackagesContainer;
