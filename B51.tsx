import React, { Component } from 'react'
interface Product{
  id:number,
  name:string,
  price:number,
  quantity:number
}

type PropType = {
  product: Product,
}
export default class B51 extends Component <PropType> {
  render() {
    return (
      <div>
        <p>Id:{this.props.product.id}</p>
        <p>Ten:{this.props.product.name}</p>
        <p>price:{this.props.product.price}</p>
        <p>quantity:{this.props.product.quantity}</p>
      </div>
    )
  }
}
