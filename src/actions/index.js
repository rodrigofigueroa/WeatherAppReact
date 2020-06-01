//middleware
import { CityMaper } from '../service/CityMaper';
import { Cities } from '../service/Cities';
//
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";


 const setCity = value => ({ type: SET_CITY, value });

 const setForcastData = payload => ({
     type: SET_FORECAST_DATA,
     payload
 })

export const FetcForecast = payload => {
    
    return dispatch => {
        const ZIP = CityMaper(payload); 
            dispatch(setCity(payload))
        if(ZIP[0].idCity !== 'Click in the country of you like'){
            Cities(ZIP).then( data =>{
                dispatch(setForcastData({city: payload, setForcastData}))
            });
        }
    }
}