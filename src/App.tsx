import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/home/home'
import ConfirmAccount from './screens/confirm-account/confirm-account'
import Tracker from './screens/tracker/tracker'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/home'></Route>
        <Route element={<ConfirmAccount/>} path='/confirm-account'></Route>
        <Route element={<Tracker/>} path='/tracker'></Route>
      </Routes>
    </BrowserRouter>
  )
  
}