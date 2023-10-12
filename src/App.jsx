import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Hotel from './Components/Hotel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/property/:id' element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
