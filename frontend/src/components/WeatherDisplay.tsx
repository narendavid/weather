import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ForecastWeatherDisplay from './ForecastWeatherDisplay';
import WeatherIcon from '../ui/WeatherIcon';

const CurrentWeatherDisplay = () => {
    const { currentWeather, loading, error } = useSelector((state: RootState) => state.weather);

    if (loading) {
        return (
            <div className='flex justify-center items-center w-full h-[80vh]'>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {currentWeather && (
                <div className='flex flex-col gap-10'>
                    <div className='flex justify-center my-[100px]'>
                        <div>
                            <h2 className='text-2xl text-center font-semibold'>Date: {currentWeather.date}</h2>
                            <div className='flex gap-8 items-center justify-center'>
                                <div>
                                    <p className='text-xl'>{currentWeather.city}</p>
                                    <p className='text-xl'>{currentWeather.weather}</p>
                                    <p className='text-xl'>{currentWeather.temperature}</p>
                                </div>
                                <WeatherIcon iconCode={currentWeather.icon} />
                            </div>
                        </div>
                    </div>
                    <ForecastWeatherDisplay />
                </div>
            )}
        </div>
    );
};

export default CurrentWeatherDisplay;
