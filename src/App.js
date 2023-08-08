import {Header} from '../src/components/header/Header'
import {Main} from './components/Main'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 className="text-3xl bg-orange-400 text-indigo-600 font-bold">
        Hello world!
      </h1>
      <Main/>
    </div>
  );
}

export default App;
