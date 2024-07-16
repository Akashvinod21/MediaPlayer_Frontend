

import { Route,Routes } from 'react-router-dom'
import './App.css'
import Landing from './Pages/Landing'
import Watch_history from './Pages/Watch_history'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'




function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Watch_history' element={<Watch_history/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
