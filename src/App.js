import React from 'react';
import logo from './logo.svg';
import './App.css';
import AlgorithmPanel from './components/algorithm/AlgorithmPanel'
import Barchart from './components/chart/Barchart'

function App() {
  return (
    <div className="App">
      <h1>Sorting Big-O Simulator</h1>
      <AlgorithmPanel />
      <Barchart />
    </div>
  );
}

export default App;
