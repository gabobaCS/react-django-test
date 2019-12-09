import React, { Component } from 'react'
import axios from 'axios'
import './display.css'
import Card from './Card.js'
import Form from './Form.js'
export default class Display extends Component {

    componentDidMount(){
        axios.get('http://localhost:8000/api/pets/')
            .then( e => {
                    this.setState({'data': e.data})
                    console.log(this.state)

            })
    }

    handleData(){
        let dataList = [];
        for (let key in this.state.data){
            dataList.push(<Card key={this.state.data[key].id} data={this.state.data[key]} />)
        }
        return dataList;
    }



    render() {
        if (this.state){
            return(
                <React.Fragment>
                <div className='card-container'>
                    {this.handleData()}
                </div>
                <Form />
                </React.Fragment>

            )
        }
  
        else {
            return (
           <Form />
        )}

    }
}


