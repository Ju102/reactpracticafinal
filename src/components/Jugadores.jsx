import React, { Component } from 'react'
import Global from './../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export class Jugadores extends Component {

    url = Global.apiApuestas;

    state = {
        jugadores: []
    }

    loadJugadoresByIdEquipo = () => {
        var request = "/api/jugadores/jugadoresequipos/" + this.props.id;

        axios.get(this.url + request).then(response => {
            console.log("Datos de jugadores conseguidos");
            this.setState({
                jugadores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadJugadoresByIdEquipo();
    }

    render() {
        return (
            <div>
                <h3>Lista de Jugadores</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.jugadores.map((jugador, index) => {
                                return <tr key={index}>
                                    <td>{jugador.nombre}</td>
                                    <td><img src={jugador.imagen} alt='Imagen' /></td>
                                    <td><NavLink className="btn btn-info" to={"/detallesjugador/" + jugador.idJugador}>Detalles</NavLink></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Jugadores