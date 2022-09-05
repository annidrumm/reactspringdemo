import './App.css';
import FadingItems from './components/FadingItems';
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
        <h2>Click the items</h2>
        <FadingItems />
      </div>
    </div>
  );
}

export default App;
