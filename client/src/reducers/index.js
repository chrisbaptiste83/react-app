import { combineReducers } from 'redux'
import { 
  RECEIVE_TACTICALPACKS,
  FETCHING_PRIMARYWEAPONS,
  RECEIVE_PRIMARYWEAPONS,
  FETCHING_TACTICALPACKS
} from '../actions';

const tacticalPackages = (state = {
  items: [],
  itemsById: {},
  loading: false 
}, action) => {
  switch(action.type) {
    case FETCHING_TACTICALPACKS:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_TACTICALPACKS:
      return {
        items: action.payload.map(tacticalPack => tacticalPack.id),
        itemsById: action.payload.reduce((idMap, tacticalPack) => {
          idMap[tacticalPack.id] = tacticalPack;
          return idMap;
        },{}),
        loading: false
      }
    default:
      return state;
  }
}

const primaryWeapons = (state = {
  items: [],
  itemsById: {},
  loading: false 
}, action) => {
  switch(action.type) {
    case FETCHING_PRIMARYWEAPONS:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_PRIMARYWEAPONS:
      return {
        items: action.payload.map(primaryWeapon => primaryWeapon.id),
        itemsById: action.payload.reduce((idMap, primaryWeapon) => {
          idMap[primaryWeapon.id] = primaryWeapon;
          return idMap;
        },{}),
        loading: false
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  tacticalPackages,
  primaryWeapons
})

export default rootReducer;