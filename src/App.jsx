import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About';


function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <Routes>
      {/* <Home /> */}
      {/* {loadingComplete ? ( */}
        <Route path="/Home" element={<LandingPage />}/>
      {/* ) : (
        <LoadingScreen setLoadingComplete={setLoadingComplete} />

      )} */}
      <Route path="/about" element={<About />} />
      
      </Routes>
    </>
  );
}

export default App;



