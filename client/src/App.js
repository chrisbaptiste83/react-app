import React from 'react'; 
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import TacticalPackagesContainer from './containers/TacticalPackagesContainer'; 
import PrimaryWeaponsContainer from './containers/PrimaryWeaponsContainer'; 
import SecondaryWeaponsContainer from './containers/SecondaryWeaponsContainer'; 
import LethalWeaponsContainer from './containers/LethalWeaponsContainer'; 
import TacticalItemsContainer from './containers/TacticalItemsContainer';  
import TacticalPackageShow from './containers/TacticalPackageShow'; 
import AddTacticalPackage from './components/AddTacticalPackage'; 
import Landing from './components/Landing'; 
import Navigation from './components/Navigation'; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return ( 
  <Router> 
      <Navigation/>
        <Switch> 
          <Route exact path="/">
            <Landing /> 
          </Route> 
          <Route exact path="/tactical_packages">  
            <TacticalPackagesContainer /> 
          </Route> 
          <Route path="/primary_weapons">
            <PrimaryWeaponsContainer /> 
          </Route> 
          <Route path="/tactical_items">
            <TacticalItemsContainer /> 
          </Route> 
          <Route path="/secondary_weapons">
            <SecondaryWeaponsContainer />  
          </Route>
          <Route path="/lethal_weapons">
            <LethalWeaponsContainer />
          </Route> 
          <Route path="/tactical_packages/:id" component={TacticalPackageShow}/>  
          <Route path="/new_tactical_package" component={AddTacticalPackage}/>
        </Switch> 
  </Router>
  );
}

export default App;
