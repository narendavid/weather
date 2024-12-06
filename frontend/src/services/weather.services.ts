import http from "../core/http";
import { WeatherCurrentResponse, WeatherForecastResponse } from "../models/weather";

export const getWeatherCurrent = async (city: string, countryCode: string): Promise<WeatherCurrentResponse> => {
    const { data } = await http.get(`/weather/current/${city}/${countryCode}`)
    return {
        date: data.date,
        temperature: data.temperature,
        city: data.city,
        weather: data.weather,
        icon: data.icon
    }
};

export const getWeatherForecast = async (city: string, countryCode: string, days: number = 5): Promise<WeatherForecastResponse> => {
    const { data } = await http.get(`/weather/forecast/${city}/${countryCode}/${days}`)
    return {
        city: data.city,
        forecast: data.forecast
    }
};