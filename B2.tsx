import React, { Component } from 'react'
interface infor{
    id:number,
    name:string,
    birth:string,
    address:string,
}

export default class B2 extends Component<any,infor> {
    constructor(props:infor){
        super(props);
        this.state={
            id:7,
            name:'lê anh quân',
            birth:'21/2/2005',
            address:'Nghệ An'
        }
    }
  render() {
    return (
      <div>
        <p>B2-Thông tin cá nhân</p>
        <p>id:{this.state.id}</p>
        <p>Tên:{this.state.name}</p>
        <p>Ngày sinh:{this.state.birth}</p>
        <p>Địa chỉ:{this.state.address}</p>
      </div>
    )
  }
}
