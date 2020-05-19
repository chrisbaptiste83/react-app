import React from 'react'; 
import './App.css'; 
import TacticalPackagesContainer from './TacticalPackagesContainer'; 
import PrimaryWeaponsContainer from './PrimaryWeaponsContainer'; 
import SecondaryWeaponsContainer from './SecondaryWeaponsContainer'; 

function App() {
  return ( 
   
  <div> 
    <center>
    <TacticalPackagesContainer /> 
    <PrimaryWeaponsContainer /> 
    <SecondaryWeaponsContainer /> 
    </center>
  </div>
  );
}

export default App;
