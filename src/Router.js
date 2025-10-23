import { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Menu from './components/Menu';
import Home from './components/Home';
import Details from './components/Details';

class Router extends Component {
  render() {

    function DetailsElement() {
      let { id } = useParams();

      return <Details id={id} />
    }

    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<DetailsElement />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Router;