import './App.css'
import MainHeader from './Components/GeneralComponent/MainHeader'
import Content from './Components/LandingPage/Content'
import MainFooter from './Components/GeneralComponent/MainFooter'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Abyss from './Components/Abyss/Abyss'
import About from './Components/About/About'
import 'animate.css'
import './animating.css'
import React from 'react'
function App () {
  return (
    <div className="App">
        <Router>
            <MainHeader noBG={location.pathname === '/'}/>
        <Routes >
            <Route exact path={'/'} element={<Content/>}/>
            <Route exact path={'/abyss'} element={<Abyss/>}/>
            <Route exact path={'/about'} element={<About/>}/>
            <Route path={'*'} element={<Navigate to={'/'} />}/>
        </Routes>
        </Router>
      <MainFooter/>
    </div>
  )
}

export default App
