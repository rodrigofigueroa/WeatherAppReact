import React            from 'react';
import { connect } from 'react-redux';
import WeatherLocation  from './WeatherLocation';
import ForeCastExtended from '../ForeCastExtended/ForeCastExtended';
import PropTypes from 'prop-types';
//import store from '../../store'
import { setCity } from '../../actions';
import './WeatherApp.sass';
//APi
const countries = ['London, uk','Mexico City, mx','Canada, CA','Helsinki, FI'];
//redux store 


class WeatherApp extends React.Component {
    constructor(){
        super();
        this.state = {
            cityForeCast : null
        }
    }
     HandleClickWeatherFun = variable => {
        // console.log(`HandleClickWeatherFun ${variable}`);        
            this.setState({cityForeCast : variable})               
            this.props.setCity(variable)
    }
     WeatherL = () => {
        return(
            countries.map(item => (<WeatherLocation city={item} key={item} HandleClickWeatherApp={this.HandleClickWeatherFun}/>))
        )
    }
    render(){
        const Weat = this.WeatherL;
        // console.log(this.state.cityForeCast);
        return(
            <section className="weatherapp">
                <section className="container-countries">
                    {Weat()}
                </section>
                <div className="separator"></div>
                <section className="container-forecast">
                    <ForeCastExtended cityForeCast={this.state.cityForeCast ? this.state.cityForeCast : '...Waiting' }/>
                </section>
            </section>
        )
    }
}

WeatherApp.propTypes = {
    setCity: PropTypes.func.isRequired
}

const MapHandleActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, MapHandleActions)(WeatherApp)

export default AppConnected;