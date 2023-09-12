import React, { useState, useEffect } from "react";
import sun from "./sun.png";

import { Select } from './selectComponent';

const WeatherWidgetComponent: React.FC  = () => {
    const [ watherData, setWatherData ] = useState<any>({});

    const fatchData = async (sity?: string) => {
        try {
            if (!sity) sity = 'Moscow';
            const response = await fetch('https://api.weatherapi.com/v1/current.json?key=9ce16e1c45d54981ada140144231209&q=' + sity);
            const data = await response.json();
            setWatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    useEffect(() => {
        fatchData();
    }, [])
    return (
        <>
            <div className="flex flex-col justify-stretch justify-items-stretch min-w-min m-2">
                <div className="flex flex-row justify-between justify-items-center align-baseline bg-violet-400 p-6 rounded-t-xl">
                    <div><img src={sun} alt="sun" className="w-10 h-10"/></div>
                    <div className="px-2">{watherData.location ? watherData.location.name : ''}</div>
                </div>
                <div className="flex flex-col justify-around align-baseline bg-indigo-50 rounded-b-xl">
                    <div className="flex flex-row justify-between align-center">
                        <div className="flex flex-col justify-center align-center p-2">
                            <p>July 29</p>
                            <h3><b>Today</b></h3>
                        </div>
                        <div className="flex flex-row justify-space-around align-center p-2">
                            <h2 className="px-0.5"><b>{watherData.current ? watherData.current.temp_c : ''}</b></h2>
                            <h2 className="px-0.5">+{watherData.current ? watherData.current.temp_f : ''}F</h2>
                        </div>
                    </div>
                </div>
                <Select options={['Moscow', 'Saint-Petersburg', 'Novosibirsk']} value="Moscow" onChange={(sity) => {
                    fatchData(sity);
                }}></Select>
            </div>
        </>
    )
}

export {WeatherWidgetComponent};