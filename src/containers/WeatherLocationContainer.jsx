import React from 'react';
import WeatherLocation from '../components/WeatherApp/WeatherLocation';
import PropTypes from 'prop-types';
import { setCity } from '../actions/index';
import { connect } from 'react-redux';
const countries = ['London, uk','Mexico City, mx','Canada, CA','Helsinki, FI'];

const WeatherLocationContainer = props => {

    const HandleClickWeatherFun = variable => {
        console.log(`HandleClickWeatherFun ${variable}`);                    
            props.setCity2(variable)
    }
     const WeatherL = () => {
        return(
            countries.map(item => (<WeatherLocation city={item} key={item} HandleClickWeatherApp={HandleClickWeatherFun}/>))
        )
    }
    return(
        <>
            {WeatherL()}
        </>
    )
} 

WeatherLocationContainer.propTypes = {
    setCity2: PropTypes.func.isRequired
}

const MapHandleActions = dispatch => ({
    setCity2(value){dispatch(setCity(value))}
});

export default connect(null, MapHandleActions)(WeatherLocationContainer);
