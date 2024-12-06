import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white">
          <div className="mx-auto p-4 min-h-screen flex flex-col gap-6">
            <div className='flex flex-wrap justify-between'>
              <h1 className="text-4xl text-center text-base-100">Weather App</h1>
              <WeatherForm />
            </div>
            <WeatherDisplay />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
