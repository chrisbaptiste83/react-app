import React, { Component } from 'react';  
import PrimaryWeaponsList from '../components/PrimaryWeaponsList'; 
import { connect } from 'react-redux';
import { fetchPrimaryWeapons} from '../actions';

class PrimaryWeaponsContainer extends Component { 

constructor(props) {
  super(props);
  this.renderLoadedContent = this.renderLoadedContent.bind(this)
} 

componentDidMount() {
this.props.fetchPrimaryWeapons()
} 

renderLoadedContent() {
  return (
    <React.Fragment>
      <PrimaryWeaponsList 
        primaryWeapons={this.props.primaryWeapons}/> 
    </React.Fragment>
  )
} 

render() {
  return (
    <section>
      <h4>Primary Weapons</h4>
      {this.props.loading ? 'Loading...' : this.renderLoadedContent()}
    </section>
  )
}
} 

const mapStateToProps = ({primaryWeapons}) => {
return {
primaryWeapons: primaryWeapons.items.map(primaryWeaponId => primaryWeapons.itemsById[primaryWeaponId]),
loading: primaryWeapons.loading
}
}
export default connect(mapStateToProps, { fetchPrimaryWeapons })(PrimaryWeaponsContainer)