import { act_inc, act_dec } from "./actions";

const defaultState = {
    savings : 0,
    checking : 0
  }
  
export function accountReducer(state=defaultState, action) {
    switch (action.type) {
      case act_inc:
        return{
          ...state, 
          [action.account]: state[action.account] + action.value
        }   
        case act_dec:
          return{
            ...state, 
          [action.account]: state[action.account] - action.value
          }    
      default:
        return state
    }
  }