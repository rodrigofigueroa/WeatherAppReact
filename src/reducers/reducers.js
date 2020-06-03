import { SET_CITY } from '../actions/index';

export const reducer = (state = '', action) => {
    // console.log(state)
    switch(action.type){
        case SET_CITY:            
            return action.value
        default: 
        return state
    }
}