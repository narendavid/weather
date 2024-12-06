export interface WeatherCurrentResponse {
    date: string;
    temperature: string;
    city: string;
    weather: string;
    icon: string;
}

export interface WeatherForecastResponse {
    city: string;
    forecast: {
        date: string;
        weather: string;
        temperature: string;
        icon: string;
    }[];
}
