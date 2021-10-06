import { Route, Link } from 'react-router-dom'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Route exact path='/' component={ Home } />
    </div>
  );
}

export default App;
