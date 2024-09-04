import Navbar from './component/Nav/Navbar'
import Home from './component/Home/Home'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import About from './component/About/About';
function App() {


  return (
    <>
        <Navbar/>
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
        </Routes>
    </>
  )
}

export default App
