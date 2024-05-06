import React, { Component } from 'react';
import B51 from './B51';
export default class B5 extends Component {
  render() {
    const product={
        productItem:{
            id: 1,
            name: "Sữa bò",
            price: 1,
            quantity: 1
        }
    }
    return (
      <div>
        <p>B5</p>
        <B51 product={product.productItem}></B51>
      </div>
    )
  }
}
