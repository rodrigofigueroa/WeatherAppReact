import  React,{useEffect, useState} from 'react';
import WeatherIcon from '../WeatherApp/WeatherLocation/WeatherIcon';
import './ForeCastExtended.sass';

const ForeCastExtended = props => {    

    const { cityForeCast } = props;
    const [setKey, setCountryFore] = useState();
    const [states,setState] = useState();    
    console.log(props)
    useEffect(() => {   
        setCountryFore(null)
        if(cityForeCast.data !== undefined){
            const ZIP = cityForeCast.data.ZIP;
            setCountryFore(cityForeCast.data.data)
            const NewZip = ZIP.map(ine => ine.cityName)
                 setState(NewZip)
        }
    }, [ cityForeCast ])
    return(        
        <article className="forecast-extended">
            <h2>ForeCast</h2>
             { 
                setKey 
                ?
                    setKey.map((itemOne,index) => {
                            let StateNow = states[index]  
                        return(
                            <div className="acordeon" key={`${index}-accordeon`}>
                                {
                                    itemOne.map((itemHtml,ind) => {
                                        const { dt, main: { temp, humidity }, weather : { 0 : { description, icon,} } } = itemHtml;
                                        return (
                                            <div key={ind}>
                                                <WeatherIcon icon={icon} title={`${description}`}/>
                                                <h2>{`${StateNow !== undefined ? StateNow : 'ji'}`}</h2>
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
                            </div>
                        )
                    })
                : <h3>Waiting...</h3> }
        </article>
    )
}

export default ForeCastExtended;