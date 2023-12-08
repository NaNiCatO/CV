import './App.css';
import React from 'react';
import Welcome from './components/Welcome';
import Snow from './components/Snow';
import Personal from './components/Personal';
import Education from './components/Education';
import Project from './components/Project';



export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <Snow />
      </header>
    </div>
  );
}

export function PersonalPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Personal />
        <Snow />
      </header>
    </div>
  );
}

export function EducationPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Education />
      </header>
    </div>
  );
}

export function ProjectPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Project />
        <Snow />
      </header>
    </div>
  );
}


