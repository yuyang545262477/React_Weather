import axios from "axios";

// const API_KEY = '316f93c42a760e658ee957212c3d6164';
const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_RUL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_RUL}&q=${city},us`;
    const request = axios.get(url);
    console.log(request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

