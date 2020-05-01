import React, { Component } from 'react'
class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    doSomeThing(productName) {
        console.log(productName);
    }
    render() {
        const { productName, unitPrice, thumbnail } = this.props.product;
        return (
            <div className="col-md-3">
                <div>{productName}{" : "}
                    {unitPrice}{" "} บาท</div>
                <img src={thumbnail} alt="" className="img-fluid rounded"></img>
                {this.props.onAddOrder && <button className="btn btn-block btn-secondary btn-sm mt-2" onClick={() => this.props.onAddOrder(this.props.product)}>ซื้อ</button>}
                {(this.props.onDelProduct || this.props.onEditProduct) && <button className="btn  btn-info btn-sm mt-2 col-5 " onClick = {()=>this.props.onEditProduct(this.props.product)} >แก้ไข</button>}
                {(this.props.onDelProduct || this.props.onEditProduct) && <button className="btn  btn-danger btn-sm mt-2 col-5 float-right" onClick={() => this.props.onDelProduct(this.props.product)}>ลบ</button>}

                <hr />
            </div>
        )
    }
}
export default ProductItem;