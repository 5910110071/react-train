import React, { Component } from "react"
import { reduxForm, Field } from "redux-form"
import FormField from "../common/FormField"
import {productFormField} from "./formFields"
class ProductForm extends Component {

    renderFields(productFormField) {
     
        return productFormField.map(({ label,name, type,required }) => {
            return (
                <Field label = {label} name={name} type={type} required = {required} component={FormField} />
            )
        })

    }

    render() {
        return (
            <div>
                <form>
                    {this.renderFields(productFormField)}
                </form>
                <button className = "btn btn-block btn-info title" type = "submit" >บันทึก</button>
            </div>
        )
    }
}
ProductForm = reduxForm({ form: "productForm" })(ProductForm)
export default ProductForm