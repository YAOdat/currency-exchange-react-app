import './App.css';
import Exchange from './CurrencyExchange'
import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Odat Currency Exchange</h1>
      <Exchange/>
    </div>
  );
}

export default App;
