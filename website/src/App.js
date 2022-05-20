import logo from './logo.svg';
import './App.scss';
import './css/animatedbg.scss';
import './css/content.scss';
import './css/nav.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Navigation } from './components/nav';
import { Content } from './components/content';

const App = () => (
  <div className="App">
    <div className='AnimatedBG'>
      <img className='Image' src='./images/background.jpg'></img>
    </div>
    <Navigation></Navigation>
    <Content></Content>
  </div>
);


export default App;
