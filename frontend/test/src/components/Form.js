import React, { Component } from 'react'
import './form.css'
import axios from 'axios'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event){
        this.setState({
            'name':event.target.value
        })   
    }

    handleSubmit(event){
        // event.preventDefault()
        axios
        .post('http://127.0.0.1:8000/api/pets/', {
            "nombre": this.state.name,
            "especie": "Perro",
            "raza": "Maltés",
            "edad": 12,
            "color": "Blanco",
            "chip": false,
            "encontrado": false,
            "fecha_desaparecido": "2019-12-05",
            "descripcion": "dfsdfsdf"
        })
        .then(response => console.log(response))
    }
    

    render() {
        return (
            <form className='pet-form' onSubmit={this.handleSubmit}>
            Nombre:<br/>
               <input className='name-input' value={this.state.name} type="text" onChange={this.handleChange}/>
               <br/>
               <input type="submit" value="Submit" />
            </form>
        )
    }
}
