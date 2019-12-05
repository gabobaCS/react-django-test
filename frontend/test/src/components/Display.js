import React, { Component } from 'react'
import axios from 'axios'

export default class Display extends Component {
    super(props){
        this.state = {

        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/')
            .then( e => {
                console.log(e)
            })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
