import { BrowserRouter as BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import * as word from '../word.json'
import { TemperatureInfo } from './TemperatureInfo.tsx'
import { HumidityInfo } from './HumidityInfo.tsx'
import { AirPressureInfo } from './AirPressureInfo.tsx'
import ThresholdSetting from './ThresholdSetting.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <h1>
            <span></span>
            <Link to="/">{word.title}</Link>
          </h1>
          <Link to="/Temperature" className="temperature">{word.TemperatureInfo}</Link>
          <Link to="/Humidity" className="humidity">{word.HumidityInfo}</Link>
          <Link to="/Pressure" className="pressure">{word.AirPressureInfo}</Link>
          <Link to="/Settings" className="settings">{word.ThresholdSetting}</Link>
        </nav>
        <Routes>
          <Route path="/Temperature" element={<TemperatureInfo />} />
          <Route path="/Humidity" element={<HumidityInfo />} />
          <Route path="/Pressure" element={<AirPressureInfo />} />
          <Route path="/Settings" element={<ThresholdSetting />} />
        </Routes>  
      </BrowserRouter>
    </>
  )
}
export default App
