import React from 'react'
import TacticalItem from './TacticalItem'
import type { TacticalItem as TacticalItemType } from '../types'

interface TacticalItemsListProps {
  tacticalItems: TacticalItemType[]
}

const TacticalItemsList: React.FC<TacticalItemsListProps> = ({ tacticalItems }) => {
  return (
    <>
      {tacticalItems.map(item => (
        <TacticalItem key={item.id} {...item} />
      ))}
    </>
  )
}

export default TacticalItemsList
