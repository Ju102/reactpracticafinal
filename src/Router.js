import { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Menu from './components/Menu';
import Home from './components/Home';
import Details from './components/Details';
import Apuestas from './components/Apuestas';
import Jugadores from './components/Jugadores';
import Jugador from './components/Jugador';

class Router extends Component {
  render() {

    function DetailsElement() {
      let { id } = useParams();

      return <Details id={id} />
    }

    function JugadoresElement() {
      let { id } = useParams();

      return <Jugadores id={id} />;
    }

    function JugadorElement() {
      let { id } = useParams();

      return <Jugador id={id} />
    }

    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<DetailsElement />} />
          <Route path="/apuestas/" element={<Apuestas />} />
          <Route path="/jugadores/:id" element={<JugadoresElement />} />
          <Route path="/detallesjugador/:id" element={<JugadorElement />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Router;