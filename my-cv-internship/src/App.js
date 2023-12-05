import './App.css';
import React from 'react';
import Welcome from './components/Welcome';
import Snow from './components/Snow';
import Personal from './components/Personal';
import Education from './components/Education';
import Project from './components/Project';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <Snow />
      </header>
    </div>
  );
}

export default App;


