import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../store/weather.slice';
import { AppDispatch } from '../store/store';

const WeatherForm: React.FC = () => {
    const [city, setCity] = useState('cartagena');
    const [countryCode, setCountryCode] = useState('co');
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!city || !countryCode) return;
        dispatch(fetchWeatherData(city, countryCode));
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-4">
            <div>
                <label htmlFor="city" className="block text-gray-700">City:</label>
                <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                    placeholder="Enter city"
                />
            </div>
            <div>
                <label htmlFor="countryCode" className="block text-gray-700">Country Code:</label>
                <input
                    id="countryCode"
                    type="text"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="mt-1 p-2 border rounded w-full"
                    placeholder="Enter country code (e.g., US, ES)"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Get Weather
            </button>
        </form>
    );
};

export default WeatherForm;
