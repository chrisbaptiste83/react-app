export const FETCHING_TACTICALPACKS = "FETCHING_TACTICALPACKS"
export const RECEIVE_TACTICALPACKS = "RECEIVE_TACTICALPACKS"
export const FETCHING_PRIMARYWEAPONS = "FETCHING_PRIMARYWEAPONS"
export const RECEIVE_PRIMARYWEAPONS = "RECEIVE_PRIMARYWEAPONS"


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