export const FETCHING_TACTICALPACKS = "FETCHING_TACTICALPACKS"
export const RECEIVE_TACTICALPACKS = "RECEIVE_TACTICALPACKS"
export const FETCHING_PRIMARYWEAPONS = "FETCHING_PRIMARYWEAPONS"
export const RECEIVE_PRIMARYWEAPONS = "RECEIVE_PRIMARYWEAPONS"
export const RECEIVE_TACTICALPACK = "RECEIVE_TACTICALPACK" 
export const FETCHING_SECONDARYWEAPONS = "FETCHING_SECONDARYWEAPONS"
export const RECEIVE_SECONDARYWEAPONS = "RECEIVE_SECONDARYWEAPONS" 
export const FETCHING_LETHALWEAPONS = "FETCHING_LETHALWEAPONS" 
export const RECEIVE_LETHALWEAPONS = "RECEIVE_LETHALWEAPONS" 
export const FETCHING_TACTICALITEMS = "FETCHING_TACTICALITEMS" 
export const RECEIVE_TACTICALITEMS = "RECEIVE_TACTICALITEMS"

export const fetchTacticalPackages = () => {
  return dispatch => {
    dispatch({ type: FETCHING_TACTICALPACKS })
    fetch('http://localhost:3001/tactical_packages')
      .then(res => res.json()) 
      .then(tacticalPackages => {
        dispatch({
          type: RECEIVE_TACTICALPACKS, 
          payload: tacticalPackages
        })
      })   
  }
} 

export const fetchSecondaryWeapons = () => {
    return dispatch => {
      dispatch({ type: FETCHING_SECONDARYWEAPONS })
      fetch('http://localhost:3001/secondary_weapons')
        .then(res => res.json()) 
        .then(secondaryWeapons => {
          dispatch({
            type: RECEIVE_SECONDARYWEAPONS, 
            payload: secondaryWeapons
          })
        })   
    }
  } 

  export const fetchLethalWeapons = () => {
    return dispatch => {
      dispatch({ type: FETCHING_LETHALWEAPONS })
      fetch('http://localhost:3001/lethal_weapons')
        .then(res => res.json()) 
        .then(lethalWeapons => {
          dispatch({
            type: RECEIVE_LETHALWEAPONS, 
            payload: lethalWeapons
          })
        })   
    }
  } 

  export const fetchTacticalItems = () => {
    return dispatch => {
      dispatch({ type: FETCHING_TACTICALITEMS })
      fetch('http://localhost:3001/tactical_items')
        .then(res => res.json()) 
        .then(tacticalItems => {
          dispatch({
            type: RECEIVE_TACTICALITEMS, 
            payload: tacticalItems
          })
        })   
    }
  }

export const fetchTacticalPackagebyId = (id) => {
    return dispatch => {
      dispatch({ type: FETCHING_TACTICALPACKS }) 
      return fetch(`http://localhost:3001/tactical_packages/${id}`)
        .then(res => res.json()) 
        .then(tacticalPackage => {
          dispatch({
            type: RECEIVE_TACTICALPACK, 
            payload: [tacticalPackage]
          })
        })  
    } 
  }

export const fetchPrimaryWeapons = () => {
  return dispatch => {
    dispatch({type:FETCHING_PRIMARYWEAPONS})
    fetch('http://localhost:3001/primary_weapons')
      .then(res => res.json())
      .then(primaryWeapons => {
        dispatch({
          type: RECEIVE_PRIMARYWEAPONS, 
          payload: primaryWeapons
        })
      })
  }
}