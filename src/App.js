import './App.css';
import LoopingCard from './components/LoopingCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>reactsrpingdemo</h1>
        <a
          className="App-link"
          href="https://react-spring.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about the animation library
        </a>
      </header>
      <div className="App-body">
        <LoopingCard />
      </div>
    </div>
  );
}

export default App;
