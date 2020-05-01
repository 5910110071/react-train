import React, { Component } from 'react'
import ProductList from '../product/ProductList'
import Calculator from './Calculator'
import axios from 'axios'

class Monitor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalPrice: 0,
            orders: [],
            msg: "",
            confirm: false

        }
        this.addOrder = this.addOrder.bind(this)
        this.delOrder = this.delOrder.bind(this)
        this.cancelOrder = this.cancelOrder.bind(this)
        this.confirmOrder = this.confirmOrder.bind(this)
    }
    addOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.id == product.id)
        if (findOrder) {
            findOrder.quantity++
        }
        else {
            this.state.orders.push({ product: product, quantity: 1 })
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice)
        
        this.setState({
            totalPrice: totalPrice,
            orders : this.state.orders
        })
    }
    delOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.id == product.id)
        let resultOrder = this.state.orders.filter(order => order.product.id != findOrder.product.id)
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice))
        this.setState({
            totalPrice: totalPrice,
            orders: resultOrder
        })
    }
    cancelOrder() {
        this.setState({
            totalPrice: 0,
            orders: [],
            confirm : false
        })
    }

    confirmOrder() {
        
        const { totalPrice, orders } = this.state
        if (orders.length > 0) {
            console.log("confirmOrder1",orders.length)
            axios.post("http://localhost:3001/orders", { orderDate: new Date(), totalPrice, orders })
                .then(res => {
                    this.setState({
                        totalPrice: 0,
                        orders: [],
                        msg: "บันทึกรายการสั่งซื้อเรียบร้อย",
                        confirm: true
                    })
                })
        }
        else{
            console.log("confirmOrder2")
            this.setState({
                totalPrice: 0,
                orders: [],
                msg: "กรุณาเลือกสิ้นค้า",
                confirm: true
            })
        }

    }

    render() {
        return (
            <div className="container-fluid text-center title">
                {this.state.confirm &&
                    <div className="alert alert-secondary titel text-right" role="alert">
                        {this.state.msg}
                    </div>
                }


                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} onCancelOrder={this.cancelOrder} onConfirmOrder={this.confirmOrder} />
                    </div>
                </div>

            </div>
        )
    }
}
export default Monitor