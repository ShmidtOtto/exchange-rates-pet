import React from 'react';
import './styles/index.css';

import { WeatherWidgetComponent } from './components/weatherWidgetComponent';

function App() {
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <WeatherWidgetComponent />
        <WeatherWidgetComponent />
        <WeatherWidgetComponent />
        <WeatherWidgetComponent />
      </div>
    </div>
  );
}

export default App;
