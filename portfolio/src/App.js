import React from 'react';
import './App.css';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

   <Router>
       <div className="App">
          <Navbar/>
          <Switch>
            <Route path = "/" exact component = {About}/>
            <Route path = "/portfolio" component={Portfolio}/>
            <Route path = '/Contact' component = {Contact}/>
          </Switch>
      </div>
     </Router>
   
  );
}

export default App;
