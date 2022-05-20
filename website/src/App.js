import logo from './logo.svg';
import './App.css';
import './css/nav.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Navigation } from './components/nav';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
    </div>
  );
}

export default App;
