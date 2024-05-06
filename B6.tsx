import React, { Component } from 'react'

export default class B6 extends Component {
  render() {
    const studentList=[
        {
            id:8,
            name:'quan le',
            address:'le loi-vinh',
            email:'lahquan130@gmail.com'
        },
        {
            id:7,
            name:'minh manh',
            address:'quan bau-vinh',
            email:'minhmanh@gmail.com',    
        }
    ]
    return (
      <div>
        <ChildrenComponent student={studentList}></ChildrenComponent>
      </div>
     
    )
  }
}
interface student{
    name:string,
    id:number,
    address:string,
    email:string,
}
type studentList={
    student:student[];
}
class ChildrenComponent extends Component<studentList>{
    render() {
        return (
          <div>
            <p>B6</p>
            <ul>
                {this.props.student.map(function(e){
                    return <li>
                        <p>ID:{e.id}</p>
                        <p>Name:{e.name}</p>
                        <p>Address:{e.address}</p>
                        <p>Email:{e.email}</p>
                    </li>
                })}

            </ul>
          </div>
          
        )
      }
}
