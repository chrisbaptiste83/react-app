import React, { Component } from 'react';  
import TacticalPackagesList from '../components/TacticalPackagesList'; 
import { connect } from 'react-redux';
import { fetchTacticalPackages} from '../actions'; 
import {Jumbotron, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'


class TacticalPackagesContainer extends Component { 

    constructor(props) {
        super(props);
        this.renderLoadedContent = this.renderLoadedContent.bind(this)
    } 

    componentDidMount() { 
      this.props.fetchTacticalPackages() 
    } 

      renderLoadedContent() {
        return (
          <React.Fragment>
            <TacticalPackagesList tacticalPackages={this.props.tacticalPackages}/>    
          </React.Fragment>
        )
      } 

      render() {
        return (
          <section>
            <center>
               <Jumbotron style={{ background: 'rgba(0,0,0, .75)',color:'white', width: '50rem' }}> 
                    <h1> Tactical Packages: </h1><br></br> 
                    <Button style={{ background: 'rgba(0,0,0, 0.5)'}}><Link to={{pathname: `/new_tactical_package`}}>Create Tactical Pack </Link></Button> 
              </Jumbotron>     
                {this.props.loading ? 'Loading...' : this.renderLoadedContent()} 
            </center>
          </section>
        )
      }
} 

const mapStateToProps = ({tacticalPackages}) => { 
  return { 
      tacticalPackages: tacticalPackages.items.map(tacticalPackageId => tacticalPackages.itemsById[tacticalPackageId]),
      loading: tacticalPackages.loading 
  }
}

export default connect(mapStateToProps, { fetchTacticalPackages })(TacticalPackagesContainer)