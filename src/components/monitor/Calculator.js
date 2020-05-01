import React , {Component} from 'react'

class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    showOrder(orders){
        return orders && orders.map(order=>(
            <li className = "mb-1" key = {order.product.id}> {order.product.productName} x {order.quantity} = {order.product.unitPrice*order.quantity}  <button className = "btn  btn-danger btn-sm" onClick = {()=>this.props.onDelOrder(order.product)}>ลบ</button></li>
        ))
    }
    render(){
        return(
            <div>
                <h4 className = "text-center">ยอดรวม {this.props.totalPrice} บาท</h4>
                <hr />
                <h6 className = "text-left">รายการ</h6>
                {(!this.props.orders || this.props.orders.length == 0) && <h6 className = "text-right">ไม่มีสินค้า</h6>}
                
                <ul className = "list-unstyled text-right">
                   {this.showOrder(this.props.orders)}
                </ul>
                <hr/>
                <button className = "btn btn-block btn-success" onClick = {()=>this.props.onConfirmOrder()}>ยืนยัน</button>
                <button className = "btn btn-block btn-secondary" onClick = {()=>this.props.onCancelOrder()}>ยกเลิก</button>
            </div>
        )
    }
}
export default Calculator