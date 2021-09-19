import axios from "axios";


const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '3fb7200b50c4e8e66911c3759b36d3b9';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });


    return data;
}