import React,{useEffect, useState} from 'react';
import {key, BASE_URL} from '../../service/openweather';
const ForeCastExtended = (props) => {    
    const {cityForeCast} = props;
    const [setKey, setCountryFore] = useState();
    useEffect(() => {            
        if(cityForeCast !== 'Waiting'){
            fetch(`${BASE_URL}${cityForeCast}&appid=${key}`)
            .then( first => first.json())
            .then(data => {console.log(data); return setCountryFore( data ); } );
        }
    }, [cityForeCast])

    return(
        <article className="forecast-extended">
            <h2>ForeCast</h2>
             <div>{cityForeCast}</div>
        </article>
    )
}

export default ForeCastExtended;