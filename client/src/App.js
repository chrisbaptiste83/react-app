import React from 'react'; 
import './App.css'; 
import TacticalPackagesContainer from './containers/TacticalPackagesContainer'; 
import PrimaryWeaponsContainer from './containers/PrimaryWeaponsContainer'; 
import SecondaryWeaponsContainer from './containers/SecondaryWeaponsContainer'; 
import LethalWeaponsContainer from './containers/LethalWeaponsContainer'; 
import TacticalItemsContainer from './containers/TacticalItemsContainer';  
import TacticalPackageShow from './containers/TacticalPackageShow';  
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return ( 
  <Router> 
  <div className="w-5/6 mx-auto">  
  <Switch>
    <center> 
    <Navbar/> 
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
    <Route path="/tactical_packages/:id" component={TacticalPackageShow}></Route>
    </center> 
  </Switch> 
  </div> 
  </Router>
  );
}

export default App;
