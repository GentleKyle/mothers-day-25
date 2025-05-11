
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Q1 from './pages/q1';
import Q2 from './pages/q2';
import Q3 from './pages/q3';
import Home from './pages/home';
import Reject from './pages/reject';
import Photos from './pages/photos';
import Q4 from './pages/q4';
import Happy from './pages/happy';
import Allie from './pages/allie';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Q1 />} />
      <Route path='/q2' element={<Q2 />} />
      <Route path='/q3' element={<Q3 />} />
      <Route path='/q4' element={<Q4 />} />
      <Route path='/home' element={<Home />} />
      <Route path='/happy' element={<Happy />} />
      <Route path='/reject' element={<Reject />} />
      <Route path='/allie' element={<Allie />} />
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

//dog cat https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/461720728_8826275997385289_2452760662743071337_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=w-cvWAlc5-IQ7kNvwHiDfjR&_nc_oc=AdkmUJLk3e3eInSnMnZbykdWa2ePyiYyxXQy9gfE3J39dl8Hc7ZFeUVuQVG2syXmqC4&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=5bCbxJTOpTh1oKnhygK1Bg&oh=00_AfKOFdnyulup4MZezLUuJmdBzBosVnIAcOvciqqdnBKunA&oe=682613BD
//other cat https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/465468064_9087998444546375_4726730045376370101_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zW9GN0LJhMMQ7kNvwE5mlAX&_nc_oc=Adm5h_HhsfDVu7IGBAX-O6uQ41m2_WoeMzQu1y8U6GUxuEiHnBTxCRA4YWKvgqkSBN8&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=7lYLyttp6uBjFNWfaZU6eQ&oh=00_AfJKJnVrkCJcCVObozFT2zJMu7B_ih85CSgXvjU8OWQ34g&oe=68261974
//other dog https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/463925906_8990103627669191_367488906514216193_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ae6mOv2EDTUQ7kNvwFLdk9W&_nc_oc=Adm9IOFiEOkoME6tyS11ierfVhZg9uMqNovh-vJHWXYTqR397MF9DA-_JGKWSaIwEt4&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=jWyzUBk7zEfFBr7w5A5CAQ&oh=00_AfIIpgvDqVeLx9p-BIl2ymABLcAFDe1fW7JiKXk9XEpdYA&oe=68260E2B