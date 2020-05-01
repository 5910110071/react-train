import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const style = {
            height: 70,
            marginTop: 20

        }
        return (
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="text-success">
                            <img src="/images/logo/logo.png" alt="" style={style}></img> "ชานมไข่มุก"
                        </h2>

                    </div>
                    <div className="col-md-4 text-right ">
                        <h4 className="mt-2">Test</h4>
                        <ul className = "list-inline">
                            <li className = "list-inline-item title"><Link className = "text-success"  to ="/">หน้าหลัก</Link></li>
                            <li className = "list-inline-item title"><Link className = "text-success" to ="/order">รายการสั่งชื้อ</Link></li>
                            <li className = "list-inline-item title"><Link className = "text-success" to ="/product">สิ้นค้า</Link></li>
                            <li className = "list-inline-item title"><Link className = "text-success" to ="/about">เกี่ยวกับเรา</Link></li>
                        </ul>
                    </div>

                </div>
                <hr />
            </div>


        )
    }
}
export default Header;