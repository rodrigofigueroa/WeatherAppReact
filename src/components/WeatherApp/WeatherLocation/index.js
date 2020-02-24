import React, {useEffect,useState} from 'react';
import './WeatherLocation.sass';
//Service
import {key, BASE_URL} from '../../../service/openweather';
//Weathericon
import WeatherIcon from './WeatherIcon';
import {Skeleton} from '@material-ui/lab';

const WeatherLocation = (props) => {
    const handleClickWeather = (variable) =>{
        const {HandleClickWeather} = props;
        HandleClickWeather(variable)
    }
    const [useCountry, setCountry] = useState()
    const {city} = props;
    useEffect(() => {
        fetch(`${BASE_URL}${city}&appid=${key}`)
        .then( first => first.json())
        .then(data => {console.log(data); return setCountry( data); } )
    },[]);
    return(
        
        <section className="weather-location" onClick={() => handleClickWeather(city)}>
            <article>    
                {
                    useCountry 
                        ? <WeatherIcon icon={useCountry ? useCountry.weather[0].icon : null} title={ useCountry.weather[0].description}/> 
                        : <Skeleton variant="circle" width={100} height={100}></Skeleton>
                }            
            </article>
            <article>
                <h2>{city}</h2>
                {useCountry ? <h2>{useCountry.weather[0].main}</h2> : null}         
            </article>
        </section>
    )
}

export default WeatherLocation;