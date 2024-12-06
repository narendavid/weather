import React from "react";
import WeatherIcon from "./WeatherIcon";

interface Props {
    data: Forecast
}

interface Forecast {
    date: string;
    weather: string;
    temperature: string;
    icon: string;
}

const WeatherCard: React.FC<Props> = ({ data }) => {

    if (!data) return null;

    const { date, temperature, icon, weather } = data;

    return (
        <div className="card">
            <div className="card-body text-center w-[180px]">
                <h2 className="card-title">{date}</h2>
                <WeatherIcon iconCode={icon} />
                <p>{temperature}</p>
                <p className="capitalize">{weather}</p>
            </div>
        </div>
    );
};

export default WeatherCard;
