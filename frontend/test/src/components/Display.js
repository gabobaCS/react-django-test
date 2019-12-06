import React, { Component } from 'react'
import axios from 'axios'

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {'petNames': []};
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/pets/')
            .then( e => {
                    this.setState(e.data)
                    for (let key in e.data){
                        this.setState({'petNames': [...this.state.petNames, e.data[key]['nombre']]})                 
                    }
            })
    }

    render() {
        return (
            <div>
                {this.state.petNames.map(listitem => (
                    <li className="list-group-item list-group-item-primary">{listitem}</li>
                ))}
            </div>
        )
    }
}
