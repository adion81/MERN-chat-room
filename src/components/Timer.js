import React, { Component } from 'react';
import { subscribeToTimer } from './api';

export default class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: 'no timestamp yet',
            date: 'no date yet'
        }
    }

    componentDidMount(){
        subscribeToTimer((err, timestamp) => this.setState({
            time: timestamp.time,
            date: timestamp.date
        }));
    }
    
    

    render(){
        return(
            <div>
                <h2>{this.state.date}  ||  {this.state.time}</h2>
            </div> 
        );

    }
}