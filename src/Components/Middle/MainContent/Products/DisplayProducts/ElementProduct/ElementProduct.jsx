import React from "react";
import "./ElementProduct.css"

const ElementProduct = (props) => {
    console.log(props);
    return (
        <div className="product-page">
            <img src={`/img/${props.product.img}`} alt={props.product.product_description} className="product-img"></img>
            <h4>{props.product.product_name}</h4>
            <span>${props.product.price}</span>
            <div className="add-to-cart"><a href="">Add to cart</a></div>
        </div>
    )
}

export default ElementProduct;