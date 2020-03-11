import  React,{useEffect, useState} from 'react';
import  {GET_API_OPEN_WEATHER_MAP} from '../../service/openweather';

const ForeCastExtended = (props) => {    
    const { cityForeCast } = props;
    const [setKey, setCountryFore] = useState();

    const OpenWeather = GET_API_OPEN_WEATHER_MAP(cityForeCast);

    const CityMaper = (city) => {
        console.log(city);
        // debugger
        switch(city){
            case 'Mexico City, mx':
                console.log(`city: ${city}`)
                return ['3527646','3827406','3521305']
                break;
            case 'London, uk':
                console.log(`city: ${city}`)
                break;
            case 'Canada, CA':
                console.log(`city: ${city}`)
                break;
            case 'Helsinky, FI':
                console.log(`city: ${city}`)
        }
    }
    const ZIP = CityMaper(cityForeCast);
    console.log(ZIP)

    useEffect(() => {            
        fetch(`${OpenWeather}`)
            .then( first => first.json())
                .then(data => {console.log(data); return setCountryFore( data ); } );
    }, [ cityForeCast ])

    return(        
        <article className="forecast-extended">
            <h2>ForeCast</h2>
             <div>{cityForeCast}</div>
        </article>
    )
}

export default ForeCastExtended;