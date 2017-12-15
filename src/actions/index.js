import axios from 'axios';

const apiKey = 'ef0a6d0921431f9f189ee67b50a9455a';
const rootUrl = `https://api.openweathermap.org/data/2.5/forecast?&appid=${apiKey}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${rootUrl}&q=${city},us`;
    console.log(url)
    const request = axios.get(url);

    console.log(`Request: ${request}`);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
    
}