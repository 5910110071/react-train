import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () =>{
    return(
        <div>
            <Header/>
            <div className = "container col-md-5">
                <h3>สวัสดีครับ</h3>
                <p className = "title text-justify mt-4 mb-4">
                    เราคือร้านอาหารเพื่อสุขภาพ
                </p>
                <h4 className = "text-success">จากร้านชานมไข่มุข</h4>

            </div>
            <Footer company = "chanon" email = "chanon.5613@gmail.com"/>
        </div>
    )
}
export default About