import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
//import Banner from './components/Banner/Banner.jsx';
//import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';
//import Rewiews from './components/Rewiews/Rewiews.jsx';
import HomePage from './components/Pages/HomePage.jsx';
import About from './components/Pages/About.jsx';
import PageRewiews from './components/Pages/PageRewiews.jsx';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
  return (
    <div className="App">

        <Header />     {/* <Header /> */}
        <Router>
            <Switch>
             <Route path="/" exact>
                 <HomePage />
             </Route>
             <Route path="/about" exact>
                 <About />
             </Route>
             <Route path="/rewiews" exact>
                 <PageRewiews />
             </Route>
         </Switch>
        </Router>
        <Footer />

    </div>
  );
}






export default App;
