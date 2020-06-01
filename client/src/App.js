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
import AddPackEquipment from './components/AddPackEquipment';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return ( 
    <Router> 
      <Navigation/><br></br>
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
            <Route exact path="/tactical_packages/new" component={AddTacticalPackage}/>
            <Route path="/tactical_packages/:id/add_equipment" component={AddPackEquipment}/>  
            <Route exact path="/tactical_packages/:id" component={TacticalPackageShow}/>  
          </Switch> 
    </Router>
  );
}

export default App;
