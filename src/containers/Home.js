import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Monitor from "../components/monitor/Monitor";

import {connect} from "react-redux"
import {productsFetch} from "../actions"

class Home extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  this.props.productsFetch();
    /*this.setState({
      products: [
        { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
        { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
        { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
        { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
        { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
        { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
      ]
    })*/

    /*
    fetch("http://localhost:3000/products",{method : "GET"})
      .then(res => res.json())
      .then(res => this.setState({products : res}))
    */

    
    /*axios.get("http://localhost:3001/products").then(res => this.setState({products : res.data}))
    */
  }
  render() {
    
    return (
      <div>
        <Header />
        <Monitor products = {this.props.products} />
        <Footer company="PSU" email="chanon.5613@gmail.com" /> 
      </div>
    )
  }

}
function mapStateToProps(state){
  return {products : state.products}  
}

export default connect(mapStateToProps , {productsFetch})(Home);
