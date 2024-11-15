import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './home';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = {name:'Ssozi',age: 10}
  const link = "http://www.google.com"



  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes}</p>
        {/* <p>{ person[name]}</p> */}
        <Home/>
        <p>{10}</p>
        <p>{'Hello World'}</p>
        <p>{[1,2,3,4,5,6]}</p>
        <p>{Math.random()*10}</p>
        {/* <a href='http://www.google.com'>Google Site</a> */}
        <a href= {link}>Google Site</a>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
