import React, { Component } from 'react'
import axios from 'axios'
import './display.css'
export default class Display extends Component {

    componentDidMount(){
        axios.get('http://localhost:8000/api/pets/')
            .then( e => {
                    this.setState({'data': e.data})
                    console.log(this.state)

            })
    }




    render() {
        if (this.state){
            return (
                <div className='card-container'>
                    <div className='card'>
                        <div className='card-title'>
                            <h3>{this.state.data[0].nombre}</h3>
                        </div>
                        <div className='left-info'>
                            <ul>
                                <li>
                                    Chip: {this.state.data[0].chip?'Sí':'No'}
                                </li>
                                <li>
                                    Negro
                                </li>
                            </ul>
                        </div>
                        <div className='right-info'>
                            <ul>
                                <li>
                                    Desparacitado
                                </li>
                                <li>
                                    Negro
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                                
            )
        }
        return (<div></div>)

    }
}


