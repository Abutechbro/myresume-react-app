import React from "react";
import './App.css'
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer' ; 

function App() {

  return (

    <div className="wrapper">
        <Header />
        <Home />
        <Footer />
    </div>

  );

}

export default App;