import React from "react";
import "./DisplayProducts.css";
import ElementProduct from "./ElementProduct/ElementProduct";
import axios from 'axios';

class DisplayProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
        this.getProducts();
    }

    getProducts = async () => {
        try {
            const myArrProd = await axios.get('https://localhost:5000/products');
            this.setState({ products: myArrProd.data })
        } catch (err) {
            console.log(err);
            return;
        }
    }

    render() {
        return (
            <div className="body-right-3" >
                {this.state.products ? this.state.products.map(product => (<ElementProduct product={product} />)) : null}
            </div>
        )
    }
}

export default DisplayProducts;