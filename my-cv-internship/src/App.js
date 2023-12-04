import './App.css';
import Welcome from './components/Welcome';
import Snow from './components/Snow';
import Personal from './components/Personal';
import Education from './components/Education';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Education/>
        <Snow/>
      </header>
    </div>
  );
}

export default App;
