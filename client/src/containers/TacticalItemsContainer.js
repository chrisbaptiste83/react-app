import React, { Component } from 'react';  
import TacticalItemsList from '../components/TacticalItemsList'; 
import { connect } from 'react-redux';
import { fetchTacticalItems} from '../actions';

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
            <h1>Tactical Equipment:</h1> 
            <TacticalItemsList tacticalItems={this.props.tacticalItems}/>
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