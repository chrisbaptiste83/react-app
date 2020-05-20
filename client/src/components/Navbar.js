import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section id="navigation">
      <nav className="bg-blue-400 py-4 mb-8"> 
        <Link className="px-4" to={{
          pathname: `/primary_weapons`
        }}>
          Primary Weapons
        </Link>
        <Link className="px-4" to={{
          pathname: `/tactical_items`
        }}>
          Tactical Equipment
        </Link>
        <Link className="px-4" to={{
          pathname: `/secondary_weapons`
        }}>
          Secondary Weapons
        </Link> 
        <Link className="px-4" to={{
          pathname: `/lethal_weapons`
        }}>
          Lethal Weapons
        </Link> 
      </nav>
    </section>
  )
}

export default Navbar