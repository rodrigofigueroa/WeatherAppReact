import  React,{useEffect, useState} from 'react';
import './ForeCastExtended.sass';
import {CityMaper} from '../../service/CityMaper';
import {Cities} from '../../service/Cities';

const ForeCastExtended = (props) => {    
    const { cityForeCast } = props;
    const [setKey, setCountryFore] = useState();

    useEffect(() => {            
        const ZIP = CityMaper(cityForeCast); 
        debugger
        if(ZIP[0].cityName !== 'nothing'){
            Cities(ZIP).then( data =>{ 
                console.log(data); return setCountryFore( data )});
        }
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