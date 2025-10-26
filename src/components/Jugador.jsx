import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';



export class Jugador extends Component {

    url = Global.apiApuestas;

    state = {
        jugador: null
    }

    loadJugadorById = () => {
        var request = "/api/jugadores/" + this.props.id;

        axios.get(this.url + request).then(response => {
            this.setState({
                jugador: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadJugadorById();
    }

    render() {
        return (
            <div>
                {
                    this.state.jugador !== null &&
                    <table className='table table-bordered me-auto table-primary'>
                        <thead>
                            <tr>
                                <td>Imagen</td>
                                <td>Nombre</td>
                                <td>Nacimiento</td>
                                <td>Posición</td>
                                <td>País</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <img src={this.state.jugador.imagen} alt="Imagen" /></td>
                                <td>{this.state.jugador.nombre}</td>
                                <td>{this.state.jugador.fechaNacimiento}</td>
                                <td>{this.state.jugador.posicion}</td>
                                <td>{this.state.jugador.pais}</td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

export default Jugador