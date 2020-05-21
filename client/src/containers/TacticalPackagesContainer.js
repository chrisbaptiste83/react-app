import React, { Component } from 'react';  
import TacticalPackagesList from '../components/TacticalPackagesList'; 
import { connect } from 'react-redux';
import { fetchTacticalPackages} from '../actions';

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
            <TacticalPackagesList 
              tacticalPackages={this.props.tacticalPackages}/> 
          </React.Fragment>
        )
      } 

      render() {
        return (
          <section>
            <h4>Tactical Packs</h4>
            {this.props.loading ? 'Loading...' : this.renderLoadedContent()}
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