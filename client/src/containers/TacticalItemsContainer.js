import React, { Component } from 'react';  
import TacticalItemsList from '../components/TacticalItemsList';

class TacticalItemsContainer extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          tacticalItems: []
        } 
    } 

    componentDidMount() {
        fetch('http://localhost:3001/tactical_items')
          .then(response => response.json())
          .then(tacticalItems => { 
            this.setState({ tacticalItems: tacticalItems })
          })
      }
    
    render() {
        return (
          <section>
            <h1>Tactical Equipment:</h1> 
            <TacticalItemsList tacticalItems={this.state.tacticalItems}/>
          </section>
        )
    }
} 

export default TacticalItemsContainer;
