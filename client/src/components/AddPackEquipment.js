import React, { Component } from 'react';
import AddPrimaryWeapon from './AddPrimaryWeapon'; 
import AddSecondaryWeapon from './AddSecondaryWeapon'; 
import AddLethalWeapon from './AddLethalWeapon'; 
import AddTacticalItem from './AddTacticalItem';
import PackageListItem from './PackageListItem';
import {fetchTacticalPackagebyId} from '../actions/index.js'; 
import { connect } from 'react-redux'; 



class AddPackEquipment extends Component { 

    
  componentDidMount() { 
    this.props.fetchTacticalPackagebyId(this.props.match.params.id)
  } 
    
  render() {
    return (  
      <center> 
        <React.Fragment> 
            <PackageListItem {...this.props.tacticalPackage}/>
            <AddPrimaryWeapon {...this.props.tacticalPackage}/><br></br> 
            <AddSecondaryWeapon {...this.props.tacticalPackage}/><br></br> 
            <AddLethalWeapon {...this.props.tacticalPackage}/><br></br> 
            <AddTacticalItem {...this.props.tacticalPackage}/><br></br>               
        </React.Fragment> 
      </center>
    ) 
  }
}
  
const mapStateToProps = ({tacticalPackages},{match}) => {
  return {
    tacticalPackage: tacticalPackages.itemsById[match.params.id]
  }
}

export default connect(mapStateToProps, { fetchTacticalPackagebyId })(AddPackEquipment)


              