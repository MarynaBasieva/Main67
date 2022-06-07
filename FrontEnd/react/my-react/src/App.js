import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header.jsx';
//import Banner from './components/Banner/Banner.jsx';
//import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';
//import Rewiews from './components/Rewiews/Rewiews.jsx';
import HomePage from './components/Pages/HomePage.jsx';
import About from './components/Pages/About.jsx';
//import PageRewiews from './components/Pages/PageRewiews.jsx';




const App = () => {
return(
    <div className="App">
	 <Router>
        <Header />     {/* <Header /> */}
            <Routes>
	 		 <Route path="/" element={<HomePage />} />
			 <Route path="/about" element={<About />} />
                {/* <Route path="/rewiews" element={<PageRewiews />} /> */}
            </Routes>
        <Footer />
      </Router>
    </div>
  );
}







export default App;

