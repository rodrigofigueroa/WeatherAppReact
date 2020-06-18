import { createSelector } from 'reselect'
import {SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY } from '../actions/index'

export const cities = (state = {}, action) => {
    switch (action.type){
        case SET_FORECAST_DATA:{
            const { city, data, ZIP } = action.payload;
            return {...state, [city]: { data, ZIP }}
            }
        case GET_WEATHER_CITY:{
            const city = action.payload;
            return {...state, [city]: {weather: null}}}
        case SET_WEATHER_CITY:{
            const {city, data } = action.payload;
            return {...state, [city]: { data }}}
        default:
            return state
    }
}

export const DataForecastReducer = createSelector((state, city) => state[city], data => data)