import React, { Component } from 'react'
import axios from 'axios'

export default class Display extends Component {
    super(props){
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/')
            .then( e => {
                    this.setState(e.data)
                    console.log(this.state)
            })
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}
