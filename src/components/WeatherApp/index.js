import React            from 'react';
import WeatherLocationContainer from '../../containers/WeatherLocationContainer';
import ForeCastExtendedContainer from '../../containers/ForeCastExtendedContainer';
import './WeatherApp.sass';

class WeatherApp extends React.Component {    
    render(){
        return(
            <section className="weatherapp">
                <section className="container-countries">
                    <WeatherLocationContainer />
                </section>                
                <div className="separator"></div>
                <section className="container-forecast">
                    <ForeCastExtendedContainer />
                </section>
            </section>
        )
    }
}


export default WeatherApp;