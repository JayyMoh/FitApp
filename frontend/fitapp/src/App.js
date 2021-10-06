import { Route, Link } from 'react-router-dom'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar';
import Profile from './Components/Profile/Profile';
import Workout from './Components/Workout/Workout';


function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Route exact path='/' component={ Home } />
      <Route exact path='/workout' component={ Workout } />
      <Route exact path='/profile' component={ Profile } />
    </div>
  );
}

export default App;
