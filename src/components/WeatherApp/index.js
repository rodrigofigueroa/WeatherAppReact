import React from 'react';
import './WeatherApp.sass';
import WeatherLocation from './WeatherLocation';
import ForeCastExtended from '../ForeCastExtended/ForeCastExtended';
//APi
const countries = ['London','Mexico','Canada','Finland'];
class WeatherApp extends React.Component {
    constructor(){
        super();
        this.state = {
            cityForeCast : null

        }
        
    }
     HandleClickWeatherFun = (variable) => {
        console.log(`HandleClickWeatherFun ${variable}`);        
            this.setState({cityForeCast : variable})     
    }
     WeatherL = () => {
        return(
            countries.map((item) => (<WeatherLocation city={item} key={item} HandleClickWeather={this.HandleClickWeatherFun}/>))
        )
    }
    render(){
        const Weat = this.WeatherL;
        console.log(this.state.cityForeCast);
        return(
            <section className="weatherapp container">
                <section>
                    {Weat()}
                </section>
                <section>
                    <ForeCastExtended cityForeCast={this.state.cityForeCast ? this.state.cityForeCast : 'Waiting' }/>
                </section>
            </section>
        )
    }
}

export default WeatherApp;