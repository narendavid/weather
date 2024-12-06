import React from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    iconCode: string;
}

const WeatherIcon: React.FC<Props> = ({ iconCode, ...props }) => {
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    return <img src={iconUrl} alt="Weather Icon" {...props} />;
};

export default WeatherIcon;
