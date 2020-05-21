import React, { Component } from 'react';  
import LethalWeaponsList from '../components/LethalWeaponsList'; 
import { connect } from 'react-redux';
import { fetchLethalWeapons} from '../actions';

class LethalWeaponsContainer extends Component { 

    constructor(props) {
        super(props);
    } 

    componentDidMount() {
        this.props.fetchLethalWeapons()
      }
    
    render() {
        return (
          <section>
            <h1>Lethal Weapons:</h1> 
            <LethalWeaponsList lethalWeapons={this.props.lethalWeapons}/>
          </section>
        )
    }
} 

const mapStateToProps = ({lethalWeapons}) => {
  return {
    lethalWeapons: lethalWeapons.items.map(lethalWeaponId => lethalWeapons.itemsById[lethalWeaponId]),
    loading: lethalWeapons.loading
  }
}

export default connect(mapStateToProps, { fetchLethalWeapons })(LethalWeaponsContainer)