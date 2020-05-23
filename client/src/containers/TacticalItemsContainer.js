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
              <Jumbotron style={{ width: '50rem' }}>  
                <h1> Tactical Equipment:</h1> 
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