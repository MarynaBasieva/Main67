import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <div className="App">
       <Header />
       <Banner />
       <Content/>
       <Footer />
    </div>
  );
}






export default App;
