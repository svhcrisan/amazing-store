import React from "react";
import "./Products.css";
import ProductsTitle from "./ProductsTitle/ProductsTitle"
import ProductsFilter from "./ProductsFilter/ProductsFilter"
import DisplayProducts from "./DisplayProducts/DisplayProducts";

class Products extends React.Component {
    render() {
        return (
            <div className="body-right">
                <ProductsTitle />
                <ProductsFilter />
                <DisplayProducts />
            </div>
        )
    }

}

export default Products;