import { combineReducers } from 'redux'
import { 
  RECEIVE_TACTICALPACKS,
  FETCHING_PRIMARYWEAPONS,
  RECEIVE_PRIMARYWEAPONS,
  FETCHING_TACTICALPACKS, 
  RECEIVE_LETHALWEAPONS,
  FETCHING_LETHALWEAPONS,
  RECEIVE_SECONDARYWEAPONS,
  FETCHING_SECONDARYWEAPONS, 
  RECEIVE_TACTICALITEMS,
  FETCHING_TACTICALITEMS,
  ADD_TACTICALPACK, 
  ADD_PRIMARYWEAPON, 
  ADD_SECONDARYWEAPON, 
  ADD_LETHALWEAPON, 
  ADD_TACTICALITEM, 
  LOGGED_OUT,
  LOGGED_IN,
  SIGNUP,
  LOGIN,
  LOGOUT
} from '../actions'; 

const usersReducer = (state = { 
  isLoggedIn: false,
  user: {} 
}, action) => {
  switch (action.type) {
    case SIGNUP:
        return {
            ...state,
            isLoggedIn: true,
            user: payload
        }
      
    case LOGIN:
        return {
            isLoggedIn: true,
            user: payload
        }
      
    case LOGGED_IN:
        return {
            isLoggedIn: true,
            user: payload.user
        }
      
    case LOGGED_OUT:
        return {
            isLoggedIn: false,
            user: {}
        }
      
    case LOGOUT:
        return {
            isLoggedIn: false,
            usersReducer: {}
        }
      
    default: 
        return state
  }
}

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
        items: action.payload.map(tacticalPack => tacticalPack.id).reverse(),
        itemsById: action.payload.reduce((idMap, tacticalPack) => {
          idMap[tacticalPack.id] = tacticalPack; 
          return idMap; 
        },{}), 
        loading: false 
      } 
    case ADD_TACTICALPACK: 
      return {
        ...state,
        items: state.items.concat(action.payload.id),
        itemsById: {
          ...state.itemsById,
          [action.payload.id]: action.payload
        }
      }
    case 'DELETE_TACTICALPACK':
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload)
      };   
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
      case ADD_PRIMARYWEAPON: 
      return {
        ...state,
        items: state.items.concat(action.payload.id),
        itemsById: {
          ...state.itemsById,
          [action.payload.id]: action.payload
        }
      }  
    default:
      return state;
  }
} 

const tacticalItems = (state = {
    items: [],
    itemsById: {},
    loading: false 
  }, action) => {
    switch(action.type) {
      case FETCHING_TACTICALITEMS:
        return {
          ...state,
          loading: true
        }
      case RECEIVE_TACTICALITEMS:
        return {
          items: action.payload.map(tacticalItem => tacticalItem.id),
          itemsById: action.payload.reduce((idMap, tacticalItem) => {
            idMap[tacticalItem.id] = tacticalItem;
            return idMap;
          },{}),
          loading: false
        } 
        case ADD_TACTICALITEM: 
        return {
          ...state,
          items: state.items.concat(action.payload.id),
          itemsById: {
            ...state.itemsById,
            [action.payload.id]: action.payload
          }
        }     
      default:
        return state;
    }
  } 

  const lethalWeapons = (state = {
    items: [],
    itemsById: {},
    loading: false 
  }, action) => {
    switch(action.type) {
      case FETCHING_LETHALWEAPONS:
        return {
          ...state,
          loading: true
        }
      case RECEIVE_LETHALWEAPONS:
        return {
          items: action.payload.map(lethalWeapon => lethalWeapon.id),
          itemsById: action.payload.reduce((idMap, lethalWeapon) => {
            idMap[lethalWeapon.id] = lethalWeapon;
            return idMap;
          },{}),
          loading: false
        } 
        case ADD_LETHALWEAPON: 
        return {
          ...state,
          items: state.items.concat(action.payload.id),
          itemsById: {
            ...state.itemsById,
            [action.payload.id]: action.payload
          }
        }    
      default:
        return state;
    }
  } 

  const secondaryWeapons = (state = {
    items: [],
    itemsById: {},
    loading: false 
  }, action) => {
    switch(action.type) {
      case FETCHING_SECONDARYWEAPONS:
        return {
          ...state,
          loading: true
        }
      case RECEIVE_SECONDARYWEAPONS:
        return {
          items: action.payload.map(secondaryWeapon => secondaryWeapon.id),
          itemsById: action.payload.reduce((idMap, secondaryWeapon) => {
            idMap[secondaryWeapon.id] = secondaryWeapon;
            return idMap;
          },{}),
          loading: false
      } 
      case ADD_SECONDARYWEAPON: 
      return {
        ...state,
        items: state.items.concat(action.payload.id),
        itemsById: {
          ...state.itemsById,
          [action.payload.id]: action.payload
        }
      }  
      default:
        return state;
    }
  }

const rootReducer = combineReducers({ 
  usersReducer,
  tacticalPackages,
  primaryWeapons, 
  secondaryWeapons,
  lethalWeapons, 
  tacticalItems
})

export default rootReducer;