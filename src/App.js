import React from 'react';
import Home from './pages/Home';
import Video from './pages/Video';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/videos/:videoId' element={<Video />} ></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;