import {combineReducers} from  'redux';
import {cities, DataForecastReducer as _DataForecastReducer} from './forereducer';
import {reducer} from './reducers';
import { createSelector } from 'reselect';

export default combineReducers({
    cities,
    city : reducer
})

export const getCity = createSelector(state => state.city, city => city);

export const  DataForecastReducer = createSelector(state => state.cities, getCity ,_DataForecastReducer);