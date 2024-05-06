import React, { Component } from 'react'
interface student{
    name:string;
}

export default class B4 extends Component <any,student> {
    constructor(props:student){
        super(props);
        this.state={
            name:'quaann lê',
        }
    }
  render() {
    return (
      <div>
        <p>B4</p>
        <p>Họ và tên bên trong Component cha:{this.state.name}</p>
        <Children name={this.state.name}></Children>

      </div>

    )
  }
}
class Children extends Component <student>{
    render() {
        return(
            <div>
                <p>Họ và tên trong Component con:{this.props.name}</p>
            </div>
        )
        
    }
}
