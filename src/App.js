import React from 'react';
import './App.css';
import Counselling from './Components/Counselling';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar'
import Planning from './Components/Planning';
import Test from './Components/Test';

function App() {
  return (
    <>
     <Navbar />
     <Homepage />
     <Planning />
     <Counselling />
     <Test />
     <Footer />
    </>
  );
}

export default App;
