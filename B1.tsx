import React, { Component } from 'react'
interface students{
    name:string;
}
export default class B1 extends Component<any,students> {
    constructor(props:students){
        super(props);
        this.state={
            name:'Lê anh Quân',
        }
    }
    render() {
        return (
        <div>
            <p>Bài 1</p>
            <p>xin chào {this.state.name}</p>
        </div>
        )
    }
}
