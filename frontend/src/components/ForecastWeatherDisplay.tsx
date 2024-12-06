import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import WeatherCard from '../ui/WeatherCard';

const ForecastWeatherDisplay: React.FC = () => {
    const { forecast, loading, error } = useSelector((state: RootState) => state.weather);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='w-full'>
            {forecast.length > 0 && (
                <div className='bg-blue-200 bg-opacity-50 p-4 rounded-xl'>
                    <h3>5-Day Forecast:</h3>
                    <div className='flex flex-wrap justify-center gap-6'>
                        {forecast.map((day, index) => (
                            <WeatherCard key={index} data={day} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForecastWeatherDisplay;
