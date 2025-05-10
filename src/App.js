
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Home from './pages/home';

function App() {
  return (
  <>
  <div className='text-5xl'>HI</div>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </>
  );
}

export default App;
