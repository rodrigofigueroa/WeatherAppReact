import React, {useState, useEffect} from'react';

const WeatherIcon = (props) => {
    const [iconFetch, setIconFetch] = useState();
    const {icon, title} = props;
    useEffect(() => {
        fetch(`http://openweathermap.org/img/wn/${icon}@2x.png`)
        .then(first => setIconFetch(first.url))
    },[]);
    return(
        <img src={iconFetch ? iconFetch : null} alt={iconFetch ? title : null}></img>
    )
}

export default WeatherIcon; 