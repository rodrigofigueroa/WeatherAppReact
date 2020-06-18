import {React, useEffect} from 'react';
import WeatherLocation from '../components/WeatherApp/WeatherLocation';
import PropTypes from 'prop-types';
import { FetcForecast, setWeather } from '../actions/index';
import { connect } from 'react-redux';
const countries = ['London, uk','Mexico City, mx','Canada, CA','Helsinki, FI'];

const WeatherLocationContainer = props => {

    useEffect(() => {
        this.props.setWeather(props.cities);
    },[])

    const HandleClickWeatherFun = variable => {
        console.log(`HandleClickWeatherFun ${variable}`);                    
            props.setCity2(variable)
    }
     const WeatherL = () => {
        return(
            countries.map(city => (
                <WeatherLocation 
                    key={city.key} 
                    city={city.name} 
                    HandleClickWeatherApp={HandleClickWeatherFun}
                    data={city.data}
                />)
                )
        )
    }
    return(<>{WeatherL()}</>
    )
} 

WeatherLocationContainer.propTypes = {
    setCity2: PropTypes.func.isRequired
}

const MapHandleActions = dispatch => ({
    setCity2(value){dispatch(FetcForecast(value))},
    setWeather: cities => dispatch(setWeather(cities))
});

export default connect(null, MapHandleActions)(WeatherLocationContainer);
