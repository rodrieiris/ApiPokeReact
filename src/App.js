import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Pokemon from './componentes/Pokemon';
import Home from './componentes/Home';
import NotFound from './componentes/NotFound';
import Padre from './componentes/Padre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Padre />}>
          <Route index element = {<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/pokemon/:nombreDelPokemon" element={<Pokemon />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
