
import './App.css';
import Client from './components/Client';
import Header from './components/Header';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App min-h-screen">
      <Header />
      <Intro />
      <Client />
    </div>
  );
}

export default App;
