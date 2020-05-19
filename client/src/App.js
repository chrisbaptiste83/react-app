import React from 'react'; 
import './App.css'; 
import TacticalPackagesContainer from './TacticalPackagesContainer'; 
import PrimaryWeaponsContainer from './PrimaryWeaponsContainer'; 
import SecondaryWeaponsContainer from './SecondaryWeaponsContainer'; 
import LethalWeaponsContainer from './LethalWeaponsContainer'; 
import TacticalItemsContainer from './TacticalItemsContainer'; 

function App() {
  return ( 
   
  <div> 
    <center>
    <TacticalPackagesContainer /> 
    <PrimaryWeaponsContainer /> 
    <TacticalItemsContainer /> 
    <SecondaryWeaponsContainer /> 
    <LethalWeaponsContainer /> 
    </center>
  </div>
  );
}

export default App;
