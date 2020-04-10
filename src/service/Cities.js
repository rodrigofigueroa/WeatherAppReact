import React from 'react';
import  {RETURN_AXIOS_POST} from './openweather';
import axios from 'axios';

export const Cities = async (object) =>{
    if( object[0].cityName !== 'nothing' ){        
        let newPromise =  await Promise.all(object.map((city) =>{ 

            const  OpenWeather =  RETURN_AXIOS_POST(city.idCity);

            return axios.get(OpenWeather).then(data => data.data);

        })).then(cities => cities);

        const MapCititesPromise =  ( PromiseValue ) => {
                const prom = PromiseValue                              
               return prom.map((promis) => {     
                 return promis.list.filter((item, index) => {                     
                     return item.dt_txt !== `${item.dt_txt.substring(0, 10)} 00:00:00` &&
                     item.dt_txt !== `${item.dt_txt.substring(0, 10)} 03:00:00` &&
                     item.dt_txt !== `${item.dt_txt.substring(0, 10)} 06:00:00` &&
                     item.dt_txt !== `${item.dt_txt.substring(0, 10)} 12:00:00`
                });
            });
            // return dataComplete;
        }
        return MapCititesPromise(newPromise)
    }
    
};