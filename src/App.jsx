import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/homePage';
import PokemonPage from './pages/pokemonPage';

function App() {
  return (
    <Router>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
      </nav>
      <Routes>
        <Route path='/' exact Component={HomePage} />
        <Route path='/pokemon/:name' Component={PokemonPage} />
      </Routes>
    </Router>
  );
}

export default App;
