import React, { Component } from 'react';  
import TacticalPackage from '../components/TacticalPackage'; 
import {fetchTacticalPackages} from '../actions/index.js'; 
import { connect } from 'react-redux';


class TacticalPackageShow extends Component { 

  constructor(props) { 
    super(props);
} 

  componentDidMount() { 
    debugger
    this.props.fetchTacticalPackages()
    } 

  render() {
      return ( 
        <React.Fragment>
        <TacticalPackage
          tacticalPackage={this.props.tacticalPackage}/> 
      </React.Fragment>
      )
  }
} 

const mapStateToProps = ({tacticalPackages}) => {
  return {
    tacticalPackages: tacticalPackages
  }
}
export default connect(mapStateToProps, { fetchTacticalPackages })(TacticalPackageShow)