import {combineReducers} from  'redux';
import {cities} from './forereducer';
import {reducer} from './reducers';

export default combineReducers({
    cities,
    city : reducer
})