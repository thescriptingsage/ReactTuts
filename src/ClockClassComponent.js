import React, { Component } from 'react';
class ClockClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date()
        }
    }

    componentDidMount(){
        this.timerId = setInterval(() => {
            this.setState({
                currentTime: new Date()
            })
        }, 1000);
    }

    componentDidUpdate(prevState){
        if(prevState.currentTime != this.state.currentTime){
            console.log("Clock updated");
        }
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }
}

export default ClockClass;