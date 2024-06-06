import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <div className='App'>
        
         
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ='/shop' element ={<Shop/>}/>
       </Routes>
       
      </BrowserRouter>
       
      </div>

   
  )
}

export default App
