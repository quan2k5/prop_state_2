import React, { Component } from 'react'
interface studentsArray{
    id:number,
    name:string,
    address:string,
}
export default class B3 extends Component<any,studentsArray[]> {
    constructor(props:studentsArray[]){
        super(props);
        this.state=[
            {
                id:14,
                name:'quân lê',
                address:'nghệ an',
            },
            {
                id:15,
                name:'đình chinh',
                address:'nghệ an',
            },
            {
                id:19,
                name:'Nhật bảo',
                address:'Vinh'
            }
    ];
    }
  render() {
    return (
      <div>
        <p>B3</p>
        <ul>
            {this.state.map(function(e){
                return <li>
                    <p>id:{e.id}</p>
                    <p>name:{e.name}</p>
                    <p>address:{e.address}</p>
                </li>
            })}
        </ul>

      </div>
     
    )
  }
}
