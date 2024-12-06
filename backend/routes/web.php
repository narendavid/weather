<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;

Route::get('/', function () {
    return view('welcome');
});
// Route::get('/weather/current/{city}', function($city){
//     return $city;
// });

Route::get('/weather/current/{city}/{country_code}', [WeatherController::class, 'getCurrentWeather']);
Route::get('/weather/forecast/{city}/{country_code}/{days}', [WeatherController::class, 'getWeatherForecast']);
