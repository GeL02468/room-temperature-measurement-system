import { BrowserRouter as BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import * as word from '../word.json'
import { TemperatureInfo } from './components/temperature/TemperatureInfo.tsx'
import { HumidityInfo } from './components/humidity/HumidityInfo.tsx'
import { AirPressureInfo } from './components/airPressure/AirPressureInfo.tsx'
import ThresholdSetting from './components/threshold/ThresholdSetting.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <h1>
            <span></span>
            <Link to="/">{word.title}</Link>
          </h1>
          <Link to="/measurement/temperature" className="temperature">{word.TemperatureInfo}</Link>
          <Link to="/measurement/humidity" className="humidity">{word.HumidityInfo}</Link>
          <Link to="/measurement/air-pressure" className="pressure">{word.AirPressureInfo}</Link>
          <Link to="/measurement/threshold" className="settings">{word.ThresholdSetting}</Link>
        </nav>
        <Routes>
          <Route path="/measurement/temperature" element={<TemperatureInfo />} />
          <Route path="/measurement/humidity" element={<HumidityInfo />} />
          <Route path="/measurement/air-pressure" element={<AirPressureInfo />} />
          <Route path="/measurement/threshold" element={<ThresholdSetting />} />
        </Routes>  
      </BrowserRouter>
    </>
  )
}
export default App
