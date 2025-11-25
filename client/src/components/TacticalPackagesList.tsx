import React, { useState, useMemo } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import TacticalPackageListItem from './TacticalPackageListItem'
import PackageListItem from './PackageListItem'
import type { TacticalPackage } from '../types'

interface TacticalPackagesListProps {
  tacticalPackages: TacticalPackage[]
}

const TacticalPackagesList: React.FC<TacticalPackagesListProps> = ({ tacticalPackages }) => {
  const [searchWord, setSearchWord] = useState('')
  const [activeSearch, setActiveSearch] = useState('')

  const handleSearch = () => {
    setActiveSearch(searchWord.toLowerCase())
  }

  const filteredPackages = useMemo(() => {
    if (!activeSearch) return tacticalPackages

    return tacticalPackages.filter(tacPack => {
      const title = tacPack.title?.toLowerCase() || ''
      return title.includes(activeSearch)
    })
  }, [tacticalPackages, activeSearch])

  const isComplete = (pkg: TacticalPackage) => {
    return pkg.primary_weapon && pkg.secondary_weapon && pkg.lethal_weapon && pkg.tactical_item
  }

  return (
    <>
      <div style={{ background: 'rgba(0,0,0, 0.75)', color: 'white', padding: '2rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
        <h3>Keyword Search</h3>
        <br />
        <InputGroup className="mb-3" style={{ maxWidth: '450px', margin: '0 auto' }}>
          <Form.Control
            type="text"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            placeholder="Search by title..."
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <Button variant="outline-light" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
        {activeSearch && filteredPackages.length === 0 && (
          <p>Sorry, that word was not found in any Tactical Package title</p>
        )}
      </div>
      <div>
        {filteredPackages.map(pkg =>
          isComplete(pkg) ? (
            <TacticalPackageListItem key={pkg.id} {...pkg} />
          ) : (
            <PackageListItem key={pkg.id} {...pkg} />
          )
        )}
      </div>
    </>
  )
}

export default TacticalPackagesList
