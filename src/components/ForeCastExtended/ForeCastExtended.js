import  React,{useEffect, useState} from 'react';
import  {GET_API_WEATHER_EXACT_PATH} from '../../service/openweather';

const ForeCastExtended = (props) => {    
    const { cityForeCast } = props;
    const [setKey, setCountryFore] = useState();

    const CityMaper = (city) => {
        console.log(city);
        // debugger
        switch(city){
            case 'Mexico City, mx':
                console.log(`city: ${city}`)
                return '3827406'
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
    const OpenWeather = GET_API_WEATHER_EXACT_PATH(ZIP);
    
    const ForeNumberDay = (OpenWeather) => {
                   
        if(typeof OpenWeather !== 'undefined' ){
                if(OpenWeather.cod !== '400'){
                    return (
                        OpenWeather.list.map((item,ind) => {
                            return (
                                <div key={ind}>
                                    <h2>{new Date(item.dt * 1000).toString()}</h2>
                                </div>
                            )
                        })
                    )
                }
           }        
    }
    console.log(ForeNumberDay(setKey))

    useEffect(() => {            
        fetch(`${OpenWeather}`)
            .then( first => first.json())
                .then(data => {
                    // console.log(data);
                     return setCountryFore( data ); } );
    }, [ cityForeCast ])

    return(        
        <article className="forecast-extended">
            <h2>ForeCast</h2>
             <div>{cityForeCast}</div>
             {ForeNumberDay(setKey)}
        </article>
    )
}

export default ForeCastExtended;