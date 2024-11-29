import './App.css';
import Navbar from './components/Navbar';
import WindowSize from './test/WindowSize';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <WindowSize />
    </div>
  );
}

export default App;