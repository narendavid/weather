import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="mx-auto p-4 bg-blue-400 min-h-screen">
        <div className='flex justify-between bg-blue-200 bg-opacity-50'>
          <h1 className="text-4xl text-center">Weather App</h1>
          <WeatherForm />
        </div>
        <WeatherDisplay />
      </div>
    </Provider>
  );
};

export default App;
