import './App.css';
import NavBar from './components/NavBar'
import CardList from './components/CardList'

function App() {
  
  

  return (
    <div className="App">
      <NavBar/>
    <h1> testing the api</h1>
    <CardList/>
    </div>
  );
}

export default App;


//https://api.chucknorris.io/jokes/random