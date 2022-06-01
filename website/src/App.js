import logo from './logo.svg';
import './App.scss';
import './css/animatedbg.scss';
import './css/content.scss';
import './css/nav.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Navigation } from './components/nav';
import { Content, Test } from './components/content';

const contents = [
  <p>1</p>,
  <p>2</p>,
  <p>3</p>
]

const App = () => {

  const [show, setShow] = useState("1");

  return (
    <div className="App">
      <div className='AnimatedBG'>
        <img className='Image' src='./images/background.jpg'></img>
      </div>
      <Navigation setContent={setShow}></Navigation>
      <Content elements={contents} ids={["1","2","3"]} show={show}></Content>
    </div>
  )
};


export default App;
