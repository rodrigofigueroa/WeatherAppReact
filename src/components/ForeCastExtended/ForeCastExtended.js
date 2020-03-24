import  React,{useEffect, useState} from 'react';
import  {RETURN_AXIOS_POST} from '../../service/openweather';
import WeatherIcon from '../WeatherApp/WeatherLocation/WeatherIcon';
import axios from 'axios';
import './ForeCastExtended.sass'
const ForeCastExtended = (props) => {    
    const { cityForeCast } = props;
    const [setKey, setCountryFore] = useState();

    const CityMaper = (city) => {
        console.log(city);
        // debugger
        switch(city){
            case 'Mexico City, mx':
                console.log(`city: ${city}`)
                // return [['3827406','Benito Juarez']]
                return [
                    { idCity: '3827406', cityName: 'Benito Juarez'},
                    { idCity: '3521305', cityName: 'Polanco'},
                    { idCity: '3970677', cityName: 'San Carlos Ecatepec'}

                ]
                break;
            case 'London, uk':
                return [
                    {idCity: '2650225', cityName: 'Edinburgh'},
                    {idCity: '7535661', cityName: 'London Borough of Harrow'},
                    {idCity: '2643741', cityName: 'City of London'},
                    {idCity: '2643743', cityName: 'London'}
                ]
                break;
            case 'Canada, CA':
                return [
                    {idCity: '6173331', cityName: 'Vancouver'},
                    {idCity: '6167865', cityName: 'Toronto'},
                    {idCity: '6115047', cityName: 'Québec'},
                    {idCity: '6325494', cityName: 'Québec'},
                    {idCity: '5379439', cityName: 'Ontario'},
                    {idCity: '6141242', cityName: 'Saskatchewan'}
                ]                
                break;
            case 'Helsinki, FI':
                return [
                    {idCity: '658225', cityName: 'Helsinki'}
                ]
                break;
                default :
                return [{idCity : 'Click in the country of you like'}, {cityName : 'nothing'}]
        }
    }
    const ZIP = CityMaper(cityForeCast); 

    
    const Cities = async (object) =>{
        if( object[0].cityName !== 'nothing' ){

            let newPromise =  await Promise.all(object.map((city) =>{ 

                const  OpenWeather =  RETURN_AXIOS_POST(city.idCity);

                return axios.get(OpenWeather).then(data => data.data);

            })).then(cities => cities);

            const MapCititesPromise =  ( PromiseValue ) => {
                    const prom = PromiseValue          
                    console.log(prom);      
                 return  prom.map((promis) => {                    
                   return promis.list.slice(0,10).map((item,index) => {
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
                    });

                });
            }
            return MapCititesPromise(newPromise)
        }
        
    };

    useEffect(() => {            
        Cities(ZIP).then( data =>{ 
            console.log(data); return setCountryFore( data )});
    }, [ cityForeCast ])

    return(        
        <article className="forecast-extended">
            <h2>ForeCast</h2>
             { 
                setKey ?
                    setKey.map((itemOne) => {
                        return itemOne.map((itemHtml) => {
                            return itemHtml
                        })
                    })
                : <h3>Waiting...</h3> }
        </article>
    )
}

export default ForeCastExtended;