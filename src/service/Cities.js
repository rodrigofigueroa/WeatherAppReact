import React from 'react';
import  {RETURN_AXIOS_POST} from './openweather';
import axios from 'axios';
import WeatherIcon from '../components/WeatherApp/WeatherLocation/WeatherIcon';

export const Cities = async (object) =>{
    if( object[0].cityName !== 'nothing' ){

        let newPromise =  await Promise.all(object.map((city) =>{ 

            const  OpenWeather =  RETURN_AXIOS_POST(city.idCity);

            return axios.get(OpenWeather).then(data => data.data);

        })).then(cities => cities);

        const MapCititesPromise =  ( PromiseValue ) => {
                const prom = PromiseValue          
                // console.log(prom);      
                // debugger
             return  prom.map((promis) => {  
                // debugger
                return promis.list.filter((item, index) => {
                    
                    if(
                        item.dt_txt === `2020-03-27 03:00:00` ||
                        item.dt_txt === `${item.dt_txt.substring(0, 10)}  18:00:00` ||
                        item.dt_txt === `${item.dt_txt.substring(0, 10)}  21:00:00` ){

                            return item.map((index) => {
                                    const { 
                                        dt,
                                        main: {
                                            temp,
                                            humidity
                                    },
                                    weather : { 
                                        0 : {                                
                                            description,
                                            icon,
                                        } 
                                    }
                                    } = item;
                                    return (
                                        <div key={index}>
                                            <WeatherIcon icon={icon} title={`${promis.city.name} ${description}`}/>
                                            <h2>{`${promis.city.name}`}</h2>
                                            <h3>
                                                {`${new Date(dt * 1000).toString()} `}
                                            </h3>
                                            <h4>
                                                {`${Math.round(temp)} °C`}
                                            </h4>
                                            <h5>
                                                {`humidity ${humidity}%`}
                                            </h5>
                                            <p>{`${description}`}</p>
                                        </div>
                                    )                                
                            })
                        }  
                });
            //    return promis.list.slice(0,10).map((item,index) => {
            //     debugger
            //     const { 
            //             dt,
            //             main: {
            //                 temp,
            //                 humidity
            //         },
            //         weather : { 
            //             0 : {                                
            //                 description,
            //                 icon,
            //             } 
            //         }
            //         } = item;
            //         return (
            //             <div key={index}>
            //                 <WeatherIcon icon={icon} title={`${promis.city.name} ${description}`}/>
            //                 <h2>{`${promis.city.name}`}</h2>
            //                 <h3>
            //                     {`${new Date(dt * 1000).toString()} `}
            //                 </h3>
            //                 <h4>
            //                     {`${Math.round(temp)} °C`}
            //                 </h4>
            //                 <h5>
            //                     {`humidity ${humidity}%`}
            //                 </h5>
            //                 <p>{`${description}`}</p>
            //             </div>
            //         )
            //     });

            });
        }
        return MapCititesPromise(newPromise)
    }
    
};