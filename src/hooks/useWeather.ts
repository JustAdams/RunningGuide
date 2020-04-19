import { useState, useEffect } from 'react';
import axios from 'axios';

const api = '608fa8e1a8364ccd91200c7cc9575dff';
const location = 'Fredericksburg,usa'
const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${api}`;
export function useWeather() {
    const [temp, setTemp] = useState(72);
    const [weather, setWeather] = useState('Sunny');

    useEffect(() => {
        console.log(temp);
    })

    // Use the openweathermap api to get the weather in the current area
    const getWeather = () => {
        return axios({
            url: endpoint,
            method: 'get'
        }).then(response => {
            console.log(response.data);
            // convert from kelvin to fahrenheit
            setTemp((response.data.main.temp - 273.15) * 1.8 + 32);
            setWeather(response.data.weather[0].main);
            console.log(temp);
            return response.data;
        })
    };

    return {
        getWeather,
        temp,
        weather
    }
}