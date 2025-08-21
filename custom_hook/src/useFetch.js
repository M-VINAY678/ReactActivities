import axios from "axios";
import { useEffect, useState } from "react";


export default function useFetch(searchCity) {
    const [weatherData, setWeatherData] = useState({ error: null, data: null, isLoading: false });
    async function fetchingWeatherData(searchCity) {
        try {
            setWeatherData({ error: null, data: null, isLoading: true })
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=20f87299df2cf2929a2d76cf2cb60c5d`);
            setWeatherData({ error: null, data: res.data, isLoading: false });
        } catch (err) {
            setWeatherData({ error: err.message, data: null, isLoading: false })
        }
    }
    useEffect(() => {
        if (!!searchCity) {
            fetchingWeatherData(searchCity)
        }
    }
        , [searchCity])
    return weatherData;
} 