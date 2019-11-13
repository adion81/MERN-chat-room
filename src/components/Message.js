import React, { Component } from 'react';
import { subscribeToMessages, sendToMessages , initialSubscribe} from './api';


export default class Message extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            myMessage: ''
        }
        initialSubscribe();

        this.updateMessages = this.updateMessages.bind(this);
        this.updateMyMessage = this.updateMyMessage.bind(this);
    }
    

    componentDidMount(){
        subscribeToMessages((err,serverMessages) =>
            this.setState({
                messages: serverMessages.messages
            })
            
        )
    }
    updateMyMessage(e){
        this.setState({
            myMessage: e.target.value
        })
    }
    
    updateMessages(){
        let currentMessage = {
            name: this.props.user,
            message: this.state.myMessage
        }
        sendToMessages(currentMessage);
        this.setState({
            myMessage: ''
        })
    }
    
    render(){
        return(
            <div className="container ">
                <h3>Welcome, {this.props.user}</h3>
                {
                    this.state.messages.map((msg, index) => (
                        <div className="row justify-content-around overflow-scroll mh-50">
                            <h6>{msg.name} says: {msg.message}</h6>
                        </div>
                    ))
                }
                <input 
                    value={this.state.myMessage}
                    onChange={this.updateMyMessage}
                />
                <button 
                    className="btn button-outline-danger"
                    onClick={this.updateMessages}
                >POST</button>
            </div>
        );
    }
    
    

}

