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
import UsersContainer from './containers/UsersContainer'; 
import AddPackEquipment from './components/AddPackEquipment'; 
import LogIn from './components/LogIn'; 
import SignUp from './components/SignUp'; 

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return ( 
    <Router> 
      <UsersContainer/><br></br>
          <Switch> 
            <Route exact path="/login" render={(routerProps) => <LogIn history={routerProps.history}/>}></Route>
            <Route exact path="/sign_up" render={(routerProps) => <SignUp {...routerProps}/>}></Route>          
            <Route exact path="/" component={Landing}/>
            <Route exact path="/tactical_packages" component={TacticalPackagesContainer}/> 
            <Route path="/primary_weapons" component={PrimaryWeaponsContainer}/>
            <Route path="/tactical_items" component={TacticalItemsContainer}/>
            <Route path="/secondary_weapons" component={SecondaryWeaponsContainer}/>
            <Route path="/lethal_weapons" component={LethalWeaponsContainer}/>
            <Route exact path="/tactical_packages/new" component={AddTacticalPackage}/>
            <Route path="/tactical_packages/:id/add_equipment" component={AddPackEquipment}/>  
            <Route exact path="/tactical_packages/:id" component={TacticalPackageShow}/>  
          </Switch> 
    </Router>
  );
}

export default App;
