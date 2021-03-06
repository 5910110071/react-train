import React, { Component } from 'react'
import ProductItem from './ProductItem'
class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    showProducts() {

        return this.props.products && this.props.products.map(product => (

            <ProductItem product={product} key={product.id} onAddOrder={this.props.onAddOrder} onDelProduct={this.props.onDelProduct} onEditProduct = {this.props.onEditProduct} />

        ))

    }
    render() {
        return (
            <div className="row">

                {this.showProducts()}

            </div>
        )
    }
}
export default ProductList