import './WeatherApp.sass';
import React            from 'react';
import WeatherLocation  from './WeatherLocation';
import ForeCastExtended from '../ForeCastExtended/ForeCastExtended';
import {createStore} from 'redux';
//APi
const countries = ['London, uk','Mexico City, mx','Canada, CA','Helsinki, FI'];
//redux store 
const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const setCity = value => ({ type: 'setCity', value });

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
            store.dispatch(setCity(variable));
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

export default WeatherApp;