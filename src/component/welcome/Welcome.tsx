import React, { Component } from 'react'

class Welcome extends Component{
    constructor(){
        super();
        this.state = {data :"Rohit"}
    }

    FunState(){
         this.setState({data : "Rawat"})
    }

    render(): React.ReactNode {

        return (
        <div className='Welcome'>
            <h1>Hello Mr.</h1>
            <button onClick={this.FunState}></button>

        </div>
    )}
}
