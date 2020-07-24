import React from 'react';
import './App.css';
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Forecast from "./components/Forecast/Forecast";
import {BrowserRouter as  Router, Switch, Route} from "react-router-dom";
import About from './components/Layout/About';


function App(props) {
  return (
    
      <Router>
        <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
        <Forecast />
        </Route>
      </Switch>
     
      <Switch>
        <Route exact path="/about">
        <About/>
        </Route>
      </Switch>

      <Footer/>
      </div>
      </Router>
    
  );
}

export default App;
