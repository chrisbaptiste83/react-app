import React, { Component } from 'react';  
import TacticalItemsList from '../components/TacticalItemsList'; 
import { connect } from 'react-redux';
import { fetchTacticalItems} from '../actions'; 
import {Jumbotron} from 'react-bootstrap'

class TacticalItemsContainer extends Component { 

    constructor(props) {
        super(props);
    } 

    componentDidMount() {
        this.props.fetchTacticalItems()
      }
    
    render() {
        return (
          <section> 
            <center>
              <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '50rem' }}>  
                <h1> Tactical Equipment:</h1> 
                <p>Unfortunately, zombies aren't your only enemies during an apocalypse.</p> 
              </Jumbotron>
              <TacticalItemsList tacticalItems={this.props.tacticalItems}/> 
            </center>
          </section>
        )
    }
} 

const mapStateToProps = ({tacticalItems}) => {
  return {
    tacticalItems: tacticalItems.items.map(tacticalItemId => tacticalItems.itemsById[tacticalItemId]),
    loading: tacticalItems.loading
  }
}

export default connect(mapStateToProps, { fetchTacticalItems })(TacticalItemsContainer)