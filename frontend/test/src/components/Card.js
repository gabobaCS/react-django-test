import React, { Component } from 'react'
import './card.css'

export default class Card extends Component {

    
    render() {
        return (
            <div className='card'>
                <div className='card-title'>
                    <h3>{this.props.data.nombre}</h3>
                </div>
                <div className='left-info'>
                    <ul>
                        <li>
                            Chip: {this.props.data.chip?'Sí':'No'}
                        </li>
                        <li>
                            Negro
                        </li>
                    </ul>
                </div>
                <div className='right-info'>
                    <ul>
                        <li>
                            Desparacitado: {this.props.data.fecha_desaparecido}
                        </li>
                        <li>
                            {this.props.data.color}
                        </li>
                    </ul>
                </div>
            </div>                               
        )
    }
    
}

