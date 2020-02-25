import React, {useState, useEffect} from'react';
import {GET_API_WEATHER_IMG} from '../../../service/openweather';

const WeatherIcon = (props) => {

    const [iconFetch, setIconFetch] = useState();
    const {icon, title} = props;
    const URL_ICON = GET_API_WEATHER_IMG(icon)
    useEffect(() => {
        fetch(`${URL_ICON}`)
        .then(first => setIconFetch(first.url))
    },[]);
    return(
        <img src={iconFetch ? iconFetch : null} alt={iconFetch ? title : null}></img>
    )
}

export default WeatherIcon; 