import React, { Component } from 'react';  
import TacticalItemsList from '../components/TacticalItemsList'; 
import { connect } from 'react-redux';
import { fetchTacticalItems} from '../actions'; 
import {Jumbotron} from 'react-bootstrap'

class TacticalItemsContainer extends Component { 

  constructor(props) {
    super(props); 
    this.renderLoadedContent = this.renderLoadedContent.bind(this)
  } 

  componentDidMount() {
    this.props.fetchTacticalItems()
  } 

  renderLoadedContent() {
    return (
      <React.Fragment>
        <TacticalItemsList tacticalItems={this.props.tacticalItems}/>     
      </React.Fragment>
    )
  }   
    
  render() {
    return (
      <section> 
        <center>
          <Jumbotron style={{background: 'rgba(0,0,0, 0.75)',color:'white', width: '65rem' }}>  
            <h1> Tactical Equipment:</h1> 
            <p>Unfortunately, zombies aren't your only enemies during an apocalypse.</p> 
          </Jumbotron>
          {this.props.loading ? <h1>'Loading...'</h1> : this.renderLoadedContent()} 
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