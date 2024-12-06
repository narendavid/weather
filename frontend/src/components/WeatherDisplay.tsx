import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ForecastWeatherDisplay from './ForecastWeatherDisplay';
import WeatherIcon from '../ui/WeatherIcon';

const CurrentWeatherDisplay = () => {
    const { currentWeather, loading, error } = useSelector((state: RootState) => state.weather);

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            {currentWeather && (
                <div className=''>
                    <p>Date: {currentWeather.date}</p>
                    <div className='flex items-center'>
                        <div>
                            <h2>{currentWeather.city}</h2>
                            <p>{currentWeather.weather}</p>
                            <p>{currentWeather.temperature}°C</p>
                        </div>
                        <WeatherIcon iconCode={currentWeather.icon} />
                    </div>
                    <ForecastWeatherDisplay />
                </div>
            )}
        </>
    );
};

export default CurrentWeatherDisplay;
