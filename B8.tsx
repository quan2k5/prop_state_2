import React, { Component } from 'react'
interface ProductItem {
    id: number,
    name: string,
    price: number,
    quantity: number,
}
type ListProduct= {
    productItem: ProductItem[];
}
export default class B8 extends Component {
    public state:{ products: ProductItem[] };
    constructor(props: any) {
        super(props);
        this.state = {
            products: [
                {
                    id: Math.floor(Math.random() * 10000000),
                   name:'bánh quy',
                   price:100000,
                   quantity:2,
                },
                {
                    id: Math.floor(Math.random() * 10000000),
                    name:'sữa hạt',
                    price:150000,
                    quantity:345665,
                }
            ]
        }

    }
  render() {
    return (
        <>
        <ChildrenProduct productItem={this.state.products}></ChildrenProduct>
        </>
    )
  }
}
class ChildrenProduct extends Component<ListProduct> {
    constructor(props: ListProduct) {
        super(props);
    }
    render() {
        const { productItem } = this.props;
        return (
            <>
                {productItem.map(e => (
                    <ul key={e.id}>
                        <li>Tên: {e.name}</li>
                        <li>GIá: {e.price}</li>
                        <li>Số lượng: {e.quantity}</li>
                    </ul>
                ))}
            </>
        )
    }
}
