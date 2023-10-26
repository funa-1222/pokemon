import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './common/Layout';
import PokeIndex from './pages/pokemons/PokeIndex';
import PokeSearch from './pages/pokemons/PokeSearch';
import PokeEdit from './pages/pokemons/PokeEdit';
import PokeDetail from './pages/pokemons/PokeDetail';

function App() {
  return (
    <>
      <Routes>
        <Route element = {<Layout/>}>
          <Route index element = {<PokeIndex/>} />
          <Route path = 'search' element = {<PokeSearch/>} />
          <Route path = 'edit' element = {<PokeEdit/>}>
            <Route path = ':id' element = {<PokeDetail/>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
