import  React,{useEffect, useState} from 'react';
import  {GET_API_OPEN_WEATHER_MAP} from '../../service/openweather';

const ForeCastExtended = (props) => {    
    const {cityForeCast} = props;
    const [setKey, setCountryFore] = useState();
    const OpenWeather = GET_API_OPEN_WEATHER_MAP(cityForeCast);

    useEffect(() => {            
        fetch(`${OpenWeather}`)
            .then( first => first.json())
                .then(data => {console.log(data); return setCountryFore( data ); } );
    }, [cityForeCast])
    return(        
        <article className="forecast-extended">
            <h2>ForeCast</h2>
             <div>{cityForeCast}</div>
        </article>
    )
}

export default ForeCastExtended;