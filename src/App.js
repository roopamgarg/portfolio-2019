import React from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route} from 'react-router-dom'
import Skills from './components/skills';
import Projects from './components/projects';
import './App.css';
import Header from './components/header'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/" exact component={Header}/>
      <Route path="/skills" exact component={Skills}/>
      <Route path="/projects" exact component={Projects}/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
