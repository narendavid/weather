<?php

namespace App\Http\Controllers;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class WeatherController extends Controller
{
    private $apiKey;

    public function __construct()
    {
        $this->apiKey = env('OPENWEATHER_API_KEY');
    }

    public function getCurrentWeather($city, $country_code)
    {
        $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
            'q' => "{$city},{$country_code}",
            'appid' => $this->apiKey,
            'units' => 'metric',
            // 'lang' => 'es'
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Could not fetch weather data'], 400);
        }

        $data = $response->json();

        return response()->json([
            'city' => "{$data['name']} ({$data['sys']['country']})",
            'date' => now()->toDateString(),
            'weather' => $data['weather'][0]['description'],
            'temperature' => "{$data['main']['temp']}°C",
            'icon' => $data['weather'][0]['icon'],
        ]);
    }

    public function getWeatherForecast($city, $country_code, $days)
    {
        $response = Http::get("https://api.openweathermap.org/data/2.5/forecast", [
            'q' => "{$city},{$country_code}",
            'appid' => $this->apiKey,
            'units' => 'metric',
            // 'lang' => 'es'
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Could not fetch forecast data'], 400);
        }

        $data = $response->json();

        $forecast = collect($data['list'])
            ->filter(function ($item) {
                return Str::contains($item['dt_txt'], '12:00:00');
            })
            ->take($days)
            ->map(function ($item) {
                return [
                    'date' => Carbon::parse($item['dt_txt'])->format('M d Y'),
                    'weather' => $item['weather'][0]['description'],
                    'temperature' => "{$item['main']['temp']}°C",
                    'icon' => $item['weather'][0]['icon'],
                ];
            });

        return response()->json([
            'city' => "{$data['city']['name']} ({$data['city']['country']})",
            'forecast' => $forecast->values(),
        ]);
    }
}
