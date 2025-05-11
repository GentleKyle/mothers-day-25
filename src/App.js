
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Home from './pages/home';
import Reject from './pages/reject';
import Photos from './pages/photos';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/reject' element={<Reject />} />
      <Route path='/photos' element={<Photos />} />
    </Routes>
  </>
  );
}

export default App;

//few question pages like cat/house/trump
//then show card - allie pic on front says happy mothers day
//inside card says heart things
//back card links to fb mems/fullscreen allie art
//dark gray bg - offwhite card - animated buttons? - 