import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios';

class Menu extends Component {

    state = {
        equipos: []
    }

    url = Global.apiApuestas;

    loadEquipos = () => {
        var request = "api/equipos";

        console.log("Cargando equipos...");

        axios.get(this.url + request).then((response) => {
            console.log("Datos obtenidos con exito");
            this.setState({
                equipos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEquipos();
    }

    render() {


        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/apuestas">Apuestas</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Equipos
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {
                                        this.state.equipos.map((equipo, index) => {
                                            return <li key={index}>
                                                <NavLink className='dropdown-item' to={"/details/" + equipo.idEquipo}>{equipo.nombre}</NavLink>
                                            </li>
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu;