import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Details extends Component {

    url = Global.apiApuestas;

    state = {
        equipo: null
    }

    loadEquipo = () => {
        var request = "api/Equipos/" + this.props.id;

        axios.get(this.url + request).then(response => {
            console.log("Datos de equipo leidos.");
            this.setState({
                equipo: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEquipo();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.id !== this.props.id) {
            console.log("Cambiando de equipo...");
            this.loadEquipo();
        }
    }

    render() {
        return (
            <div className='m-4'>
                {
                    this.state.equipo !== null &&
                    <ul>
                        <li><img className='w-25' src={this.state.equipo.imagen} alt="Equipo" /></li>
                        <li>{this.state.equipo.nombre}</li>
                        <li>{this.state.equipo.descripcion}</li>
                        <li>Nº Champions: {this.state.equipo.champions}</li>
                        <li>Veces finalista: {this.state.equipo.finalista}</li>
                        <li>Web: {this.state.equipo.web}</li>
                        <li><NavLink className="btn btn-success" to={"/jugadores/" + this.state.equipo.idEquipo}>Jugadores</NavLink></li>
                    </ul>
                }
            </div>
        )
    }
}

export default Details