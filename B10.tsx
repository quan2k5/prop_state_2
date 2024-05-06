import React, { Component } from 'react'
import './B10.css'
interface task{
  id: number,
  name: string,
  assign: string,
  status: boolean
  date: string
}
export default class App extends Component {
  public state: task[];
  constructor(props: any) {
    super(props);
    this.state = [
      {
        id: Math.floor(Math.random() * 100000),
        name: 'task1',
        assign: 'user1',
        status: false,
        date: '01/06/2024 01:24:54'
      },
      {
        id: Math.floor(Math.random() * 100000),
        name: 'task2',
        assign: 'user2',
        status: true,
        date: '15/05/2024 13:20:14'
      }
    ];
  }
  checkStatus(value: boolean): string{
    if(value){
      return 'button done'
    }
    return 'button notDone'
  }
  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên công việc</th>
              <th>Người thực hiện</th>
              <th>Trạng thái</th>
              <th>Thời gian tạo</th>
              <th colSpan={2}>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><button className='done'>Chưa hoàn thành</button></td>
              <td><button className='edit'>Sửa</button></td>
              <td><button className='delete'>Xóa</button></td>
            </tr> */}
            {this.state.map((item, index) =>{
              return(
              <tr key={item.id}>
                <td>{index + 1}</td>  
                <td>{item.name}</td>
                <td>{item.assign}</td>
                <td><button className={this.checkStatus(item.status)}>{item.status? 'Hoàn Thành' : 'Chưa Hoàn Thành'}</button></td>
                <td>{item.date}</td>
                <td>
                  <button className='edit'>Sửa</button>
                  <button className='delete'>Xóa</button>
                </td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}
