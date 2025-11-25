import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

import Navigation from './components/Navigation'
import Landing from './components/Landing'
import TacticalPackagesContainer from './containers/TacticalPackagesContainer'
import PrimaryWeaponsContainer from './containers/PrimaryWeaponsContainer'
import SecondaryWeaponsContainer from './containers/SecondaryWeaponsContainer'
import LethalWeaponsContainer from './containers/LethalWeaponsContainer'
import TacticalItemsContainer from './containers/TacticalItemsContainer'
import TacticalPackageShow from './containers/TacticalPackageShow'
import AddTacticalPackage from './components/AddTacticalPackage'
import AddPackEquipment from './components/AddPackEquipment'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tactical_packages" element={<TacticalPackagesContainer />} />
        <Route path="/tactical_packages/new" element={<AddTacticalPackage />} />
        <Route path="/tactical_packages/:id" element={<TacticalPackageShow />} />
        <Route path="/tactical_packages/:id/add_equipment" element={<AddPackEquipment />} />
        <Route path="/primary_weapons" element={<PrimaryWeaponsContainer />} />
        <Route path="/secondary_weapons" element={<SecondaryWeaponsContainer />} />
        <Route path="/lethal_weapons" element={<LethalWeaponsContainer />} />
        <Route path="/tactical_items" element={<TacticalItemsContainer />} />
      </Routes>
    </Router>
  )
}

export default App
