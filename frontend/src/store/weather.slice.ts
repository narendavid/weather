import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getWeatherCurrent, getWeatherForecast } from '../services/weather.services';
import { WeatherCurrentResponse, WeatherForecastResponse } from '../models/weather';

interface WeatherState {
    currentWeather: WeatherCurrentResponse | null;
    forecast: WeatherForecastResponse['forecast'];
    loading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    currentWeather: null,
    forecast: [],
    loading: false,
    error: null,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        setWeatherData: (
            state,
            action: PayloadAction<{ currentWeather: WeatherCurrentResponse; forecast: WeatherForecastResponse['forecast'] }>
        ) => {
            state.currentWeather = action.payload.currentWeather;
            state.forecast = action.payload.forecast;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setFinally: (state) => {
            state.loading = false;
        }
    },
});

export const { setLoading, setWeatherData, setError, setFinally } = weatherSlice.actions;

export const fetchWeatherData = (city: string, countryCode: string) => async (dispatch: any) => {
    dispatch(setLoading());
    try {
        const currentWeather = await getWeatherCurrent(city, countryCode);
        const forecast = await getWeatherForecast(city, countryCode);
        dispatch(setWeatherData({ currentWeather, forecast: forecast.forecast }));
    } catch (error: any) {
        dispatch(setError('Failed to fetch weather data'));
    } finally {
        dispatch(setFinally())
    }
};

export default weatherSlice.reducer;
