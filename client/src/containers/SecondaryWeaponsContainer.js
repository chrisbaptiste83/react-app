import React, { Component } from 'react';  
import SecondaryWeaponsList from '../components/SecondaryWeaponsList'; 
import { connect } from 'react-redux';
import { fetchSecondaryWeapons} from '../actions';


class SecondaryWeaponsContainer extends Component { 

    constructor(props) {
        super(props);
    } 

    componentDidMount() {
        this.props.fetchSecondaryWeapons()
      }
    
    render() {
        return (
          <section>
            <h1>Secondary Weapons:</h1> 
            <SecondaryWeaponsList secondaryWeapons={this.props.secondaryWeapons}/>
          </section>
        )
    }
} 

const mapStateToProps = ({secondaryWeapons}) => {
  return {
    secondaryWeapons: secondaryWeapons.items.map(secondaryWeaponId => secondaryWeapons.itemsById[secondaryWeaponId]),
    loading: secondaryWeapons.loading
  }
}

export default connect(mapStateToProps, { fetchSecondaryWeapons })(SecondaryWeaponsContainer)
