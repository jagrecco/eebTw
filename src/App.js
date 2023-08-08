import {Header} from '../src/components/header/Header'
import {Main} from './components/Main'
import {Footer} from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 className="text-3xl bg-orange-400 text-indigo-600 font-bold">
        Hello world!
      </h1>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
