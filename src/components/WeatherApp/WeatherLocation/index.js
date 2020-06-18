import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux';
import './WeatherLocation.sass';
//Service
import {GET_API_OPEN_WEATHER_MAP} from '../../../service/openweather';
//Weathericon
import WeatherIcon from './WeatherIcon';
import {Skeleton} from '@material-ui/lab';

const WeatherLocation = (props) => {
    
    const handleClickWeather = (variable) =>{
        const {HandleClickWeatherApp} = props;
            HandleClickWeatherApp(variable)
    }
    const [useCountry, setCountry] = useState()
    const {city}                   = props;
    const WeatherApi               = GET_API_OPEN_WEATHER_MAP(city);

    useEffect(() => {
        fetch(`${WeatherApi}`)
            .then( first => first.json())
                .then(data => {
                    // console.log(data);
                     return setCountry( data); } )
    },[
        WeatherApi
    ]);    
    const Data = () => {
        const {
            weather: { 0: {
                    description
                }
            } = '',
            main : {
                temp,
                humidity
            } = '',
            name
        } = useCountry;
        return (
            <section className="">
                <h2>{name}</h2>
                <h3>{Math.round(temp)} ºC</h3>
                <h4>humidity {humidity}%</h4>
                <h5>{description}</h5>
            </section>
        )
    }
    return(                
            <section className="weather-location" onClick={() => handleClickWeather(city)}>
                    <article>    
                            {useCountry ? 
                                <div>
                                    <WeatherIcon 
                                        icon={useCountry 
                                            ? 
                                                useCountry.weather[0].icon 
                                            : null
                                                } 
                                        title={ useCountry.weather[0].description}/>
                                </div>
                            : <Skeleton variant="circle" width={100} height={100}></Skeleton>}            
                    </article>
                    <article>                            
                            { useCountry ? Data() : <h2>...Waiting</h2> }       
                    </article>
            </section>
    )
}

const mapStateProps = dispatch => ({
    
})
export default connect(null,mapStateProps)(WeatherLocation);
// export default WeatherLocation;