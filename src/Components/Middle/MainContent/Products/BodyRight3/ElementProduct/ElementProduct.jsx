import React from "react";
import "./ElementProduct.css"

const request = require('request');
request('https://localhost:5000/products', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});

const ElementProduct = () => {
    return (
        <div className="product-page">
            <img src="images/img1.jpg" alt="img" class="product-img"></img>
            <h4>Missha All Around Safe Block Sebum Zero Gel</h4>
            <span>$4.00</span>
            <div className="add-to-cart"><a href="">Add to cart</a></div>
        </div>
    )
}

export default ElementProduct;