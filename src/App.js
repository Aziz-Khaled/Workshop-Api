import './App.css';
import Axios from 'axios'
import {useState} from 'react'
function App() {

  const [jokes,setJokes] = useState ('')

  const GetJokes = () => { 
    Axios.get('https://api.chucknorris.io/jokes/random')
    .then ((response) =>{  console.log (response) ; setJokes (response.data.value) })
    

  
  }

  return (
    <div className="App">
    <h1> testing the api</h1>
    <button onClick={GetJokes}> Getting jokes</button>
    <h2> {jokes} </h2>
    </div>
  );
}

export default App;


//https://api.chucknorris.io/jokes/random