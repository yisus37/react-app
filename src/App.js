import logo from './logo.svg';
import './App.css';

function App() {
  const handler = (e) => {
    e.preventDefault()
        document.getElementById("nom").innerHTML="tu nombre es "+e.target[0].value +" " + e.target[1].value
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Proyecto tms</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <form  onSubmit={handler}>
          <input name='inp1' id='inp1' type="text" placeholder='nombre' />
          <input name='inp2' id='inp2' type="text" placeholder='apellido' />
          <button id='btn'>  SALUDAR</button>
        </form>
        <h5 id='nom'></h5>
      </header>
    </div>
  );
}

export default App;
