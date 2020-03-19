import  React,{useEffect, useState} from 'react';
import  {GET_API_WEATHER_EXACT_PATH, RETURN_AXIOS_POST} from '../../service/openweather';
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
                    { idCity: '3521305', cityName: 'Benito Juarez'}

                ]
                break;
            case 'London, uk':
                console.log(`city: ${city}`)
                break;
            case 'Canada, CA':
                console.log(`city: ${city}`)
                break;
            case 'Helsinky, FI':
                console.log(`city: ${city}`)
                break;
                default :
                return [{idCity : 'Click in the country of you like'}, {cityName : 'nothing'}]
        }
    }
    const ZIP = CityMaper(cityForeCast); 

    
    const Cities = async (object) =>{

        if( object[1].cityName !== 'nothing' ){

            let newPromise =  await Promise.all(object.map((city, index) =>{ 

                const  OpenWeather =  RETURN_AXIOS_POST(city.idCity);

                return axios.get(OpenWeather).then(data => data.data);

            })).then(cities => cities);

            const MapCititesPromise =  ( PromiseValue ) => {
                const prom = PromiseValue                
                 return  prom.map((promis, index) => {                    
                   return promis.list.slice(0,10).map((item,index) => {
                    const { 
                            dt,
                            main: {
                                temp,
                                feels_like,
                                temp_min,
                                temp_max,
                                pressure,
                                sea_level,
                                grnd_level,
                                humidity,
                                temp_kf,
                        },
                        weather : { 
                            0 : {
                                id,
                                main,
                                description,
                                icon,
                            } 
                        },
                        dt_txt
                        } = item;
                        return (
                            <div key={index}>
                                <h2>{`${promis.city.name}`}</h2>
                                <h2>{`${promis.city.id}`}</h2>
                                <p>
                                    {`${dt} ${temp} ${humidity}  ${main} ${description}`}
                                </p>
                            </div>
                        )
                    });

                });
            }
            return MapCititesPromise(newPromise)
        }
        
    };

     
   
    
    // const ForeNumberDay = (OpenWeather) => {
                   
    //     if(typeof OpenWeather !== 'undefined' ){
    //             if(OpenWeather.cod !== '400'){
    //                 console.log(OpenWeather);
    //                 // debugger
    //                 return (
    //                     OpenWeather.list.map((item,ind) => {
    //                         const { 
    //                             dt,
    //                             main: {
    //                                 temp,
    //                                 feels_like,
    //                                 temp_min,
    //                                 temp_max,
    //                                 pressure,
    //                                 sea_level,
    //                                 grnd_level,
    //                                 humidity,
    //                                 temp_kf,
    //                         },
    //                         weather : { 
    //                             0 : {
    //                                 id,
    //                                 main,
    //                                 description,
    //                                 icon,
    //                             } 
    //                         },
    //                         dt_txt
    //                     } = item;
    //                         return (
    //                             <div key={ ind } className="week-forecast">
    //                                 <h2>{ new Date(dt * 1000).toString() }</h2>
    //                                 <div className="card-week-forecast">

    //                                 </div>
    //                             </div>
    //                         )
    //                     })
    //                 )
    //             }
    //        }        
    // }
    // console.log(ForeNumberDay(setKey))

    useEffect(() => {            
        // fetch(`${OpenWeather}`)
        //     .then( first => first.json())
        //         .then(data => {
        //             // console.log(data);
        //              return setCountryFore( data ); } );

                    Cities(ZIP).then( data =>{ 
                        console.log(data); return setCountryFore( data )});
    }, [ cityForeCast ])

    return(        
        <article className="forecast-extended">
            <h2>ForeCast</h2>
            {/* <div>{ZIP[0][1]} {cityForeCast}</div> */}
             {/* {ForeNumberDay(setKey)} */}
             { 
                setKey ?
                    setKey.map((itemOne,index) => {
                        return itemOne.map((itemHtml,index) => {
                            return itemHtml
                        })
                    })
                : <h3>no</h3> }
        </article>
    )
}

export default ForeCastExtended;