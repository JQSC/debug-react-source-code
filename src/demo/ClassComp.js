import React, { Component, createElement } from 'react';

class ClassComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            count2:1,
            style:null
        }
        this.add = this.add.bind(this)
    }

    add() {
        this.setState({
            count: this.state.count + 1,
            style:{
                backgroundColor:'red'
            }
        }, () => {
            console.log(1);
        })
        // this.setState({
        //     count: this.state.count + 1,
        //     count2:this.state.count2 + 1,
        // }, () => {
        //     console.log(2);
        // })
        // setTimeout(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     }, () => {
        //         console.log(3);
        //     })
        // })
    }

    render() {
        return (
            <div style={this.state.style}>
                <button onClick={this.add}>累加：{this.state.count}</button>
            </div>
        );
    }
}

export default ClassComp