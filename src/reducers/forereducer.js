import {SET_FORECAST_DATA } from '../actions/index'

export const cities = (state = {}, action) => {
    switch (action.type){
        case SET_FORECAST_DATA:
            const { city, data, ZIP } = action.payload;
            // console.log(action.payload)
            return {...state, [city]: { data, ZIP }}
        default:
            return state
    }
}

export const DataForecastReducer = (state, city) => {
    console.log(city)    
    return (
        state[city]
    ) 
}