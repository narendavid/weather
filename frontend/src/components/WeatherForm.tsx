import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../store/weather.slice';
import { AppDispatch } from '../store/store';

const WeatherForm: React.FC = () => {
    const [city, setCity] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!city || !countryCode) return;
        dispatch(fetchWeatherData(city, countryCode));
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-end gap-4">
            <div>
                <label htmlFor="city" className="block text-white">City:</label>
                <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-1 p-2 border rounded w-full text-black"
                />
            </div>
            <div>
                <label htmlFor="countryCode" className="block text-white">Country Code:</label>
                <input
                    id="countryCode"
                    type="text"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="mt-1 p-2 border rounded w-full text-black"
                />
            </div>
            <div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
            </div>
        </form>
    );
};

export default WeatherForm;
