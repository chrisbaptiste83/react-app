import React, { Component } from 'react';  
import TacticalPackage from '../components/TacticalPackage'; 
import {fetchTacticalPackagebyId} from '../actions/index.js'; 
import { connect } from 'react-redux';


class TacticalPackageShow extends Component { 

  constructor(props) { 
    super(props); 
    this.renderLoadedContent = this.renderLoadedContent.bind(this)
  } 

  componentDidMount() { 
    this.props.fetchTacticalPackagebyId(this.props.match.params.id)
  } 

  renderLoadedContent() {
    return (
      <React.Fragment>  
        <TacticalPackage tacticalPackage={this.props.tacticalPackage}/>      
      </React.Fragment>
    )
  } 


  render() {
    if (!this.props.tacticalPackage) {
      return <div></div> 
    } 
    else {
      return ( 
        <React.Fragment>  
          {this.props.loading ? 'Loading...' : this.renderLoadedContent()}     
        </React.Fragment>
      ) 
    }  
  }
} 

const mapStateToProps = ({tacticalPackages},{match}) => {
  return {
   tacticalPackage: tacticalPackages.itemsById[match.params.id]
  }
}
export default connect(mapStateToProps, { fetchTacticalPackagebyId })(TacticalPackageShow)