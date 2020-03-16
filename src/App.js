import React from 'react';
import './App.sass';

import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <div className="App">      
        <section className="App-header">
            <WeatherApp />
        </section>
    </div>
  );
}

export default App;
