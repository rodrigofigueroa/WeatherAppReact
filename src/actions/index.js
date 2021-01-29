//middleware
import { CityMaper } from '../service/CityMaper';
import { Cities } from '../service/Cities';
import {GET_API_OPEN_WEATHER_MAP} from '../service/openweather';
//
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

export const SET_WEATHER_CITY = "SET_WEATHER_CITY";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

 const setCity = value => ({ type: SET_CITY, value });
 const setForcastData = payload => ({ type: SET_FORECAST_DATA, payload })

export const FetcForecast = payload => {
    
    return dispatch => {
        const ZIP = CityMaper(payload); 
            dispatch(setCity(payload))
        if(ZIP[0].idCity !== 'Click in the country of you like'){
            Cities(ZIP).then( data =>{
                // console.log(payload , data)                
                dispatch(setForcastData({city: payload, data, ZIP}))
            });
        }
    }
}

export const setWeather = payload => {
    console.log(payload)
    // debugger
    const WeatherApi               = GET_API_OPEN_WEATHER_MAP(payload.city);
    return dispatch => {
        dispatch(getWeatherCity(payload.city));
        fetch(`${WeatherApi}`)
            .then( first => first.json())
                .then(data => {
                        dispatch(setWeatherCity(payload, data));
                    } )
    }
}